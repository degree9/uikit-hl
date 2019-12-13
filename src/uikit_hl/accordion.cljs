(ns uikit-hl.accordion
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defn- format-accordion [accordion]
  (str "uk-accordion-" accordion))

(defmulti uk-accordion! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem kw val]
  (uk-accordion! elem kw val))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-accordion (name kw)) v}))

(defmethod uk-accordion! ::accordion
  [elem _ val]
  (.accordion uk/uikit elem (clj->js val)))

(h/defelem accordion [{:keys [accordion] :or {accordion {}} :as attr} kids]
  (h/ul
    (dissoc attr :accordion)
    ::accordion accordion
    kids))

(h/defelem title [attr kids]
  (h/h3 attr ::title true kids))

(h/defelem content [attr kids]
  (h/div attr ::content true kids))
