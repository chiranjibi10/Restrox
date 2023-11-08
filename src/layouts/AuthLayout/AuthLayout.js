import React, { useEffect } from 'react';

// components 
import { NioIcon, NioMedia, NioStickyBadge } from '../../components'

function AuthLayout({ title = "Page Title Goes Here", rootClass = "layout-1", children }) {

  useEffect(() => {
    document.title = `${title} - NioLand React Template`
  }, [title]);

  useEffect(() => {
    // Apply rootClass to the body element when the rootClass prop changes
    const body = document.querySelector('body');

    if (rootClass) {
      body.classList.add(rootClass);
    }

    // Remove the previous rootClass if it exists
    return () => {
      if (rootClass) {
        body.classList.remove(rootClass);
      }
    };
  }, [rootClass]);

  return (
    <>
      <div className="nk-split-page flex-column flex-xl-row">
        <div className="nk-split-col nk-auth-col justify-content-center">
          {children}
        </div>
        <div className="nk-split-col nk-auth-col nk-auth-col-content  bg-primary-gradient is-theme">
          <div className="nk-auth-content mx-md-9 mx-xl-auto">
            <div className="nk-auth-content-inner">

              <div className="media media-lg media-circle media-middle text-bg-blue-400 text-white mb-5">
                <NioIcon name="quote-left" />
              </div>
              <h1 className="mb-5">We’re building a better application now</h1>
              <div className="nk-auth-quote ms-sm-5">
                <div className="nk-auth-quote-inner">
                  <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis magna massa semper tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis magna massa semper tristique dotset.</p>

                  <div className="media-group align-items-center pt-3">
                    <NioMedia
                      rounded
                      size="md"
                      img="../images/avatar/a.jpg"
                    />
                    <div className="media-text">
                      <div className="h5 mb-0">Wade Warren</div>
                      <span className="small">3 months ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NioStickyBadge />
    </>
  )
}
export default AuthLayout;