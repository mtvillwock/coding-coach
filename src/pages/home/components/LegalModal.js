import React from 'react';
import { func, oneOf } from 'prop-types';
import { Trans, t } from '@lingui/macro';

import Button from 'components/button/Button';
import Modal from 'components/modal/Modal';
import { Panel, PanelHeader, PanelContent, PanelFooter } from 'components/panel/Panel';
import PrivacyPolicy from 'pages/static/PrivacyPolicy';
import CookiesPolicy from 'pages/static/CookiesPolicy';
import TermsAndConditions from 'pages/static/TermsAndConditions';
import CodeOfConduct from 'pages/static/CodeOfConduct';

const titles = {
  terms: t`footer.legal.terms`,
  privacy: t`footer.legal.privacy`,
  cookies: t`footer.legal.cookies`,
  conduct: t`footer.legal.conduct`,
};

function LegalModal({ onClose, page, t }) {
  let Content = CookiesPolicy;

  if (page === 'terms') {
    Content = TermsAndConditions;
  }

  if (page === 'privacy') {
    Content = PrivacyPolicy;
  }

  if (page === 'conduct') {
    Content = CodeOfConduct;
  }

  return (
    <Modal onClose={onClose}>
      <Panel>
        <PanelHeader>
          <Trans id={titles[page]} />
        </PanelHeader>
        <PanelContent>
          <Content />
        </PanelContent>
        <PanelFooter>
          <Button size="small" onClick={onClose}>
            <Trans id="common.close" />
          </Button>
        </PanelFooter>
      </Panel>
    </Modal>
  );
}

LegalModal.propTypes = {
  onClose: func,
  page: oneOf(['cookies', 'terms', 'privacy', 'conduct']).isRequired,
};

export default LegalModal;