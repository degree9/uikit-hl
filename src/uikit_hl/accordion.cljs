(ns uikit-hl.accordion
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-accordion! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem kw val]
  (uk-accordion! elem kw val))

(defmethod uk-accordion! ::default
  [elem _ val]
  (.accordion uikit elem (clj->js val)))

(hl/defelem accordion [{:keys [accordion] :or {accordion {}} :as attr} kids]
  (hl/ul
    (dissoc attr :accordion)
    ::accordion accordion
    kids))

(hl/defelem title [attr kids]
  (hl/h3 attr ::title true kids))

(hl/defelem content [attr kids]
  (hl/div attr ::content true kids))
