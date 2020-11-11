(ns uikit-hl.accordion
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defn- format-accordion [accordion]
  (str "uk-accordion-" accordion))

(defmulti uk-accordion! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem kw v]
  (uk-accordion! elem kw v))

(defmethod uk-accordion! ::default
  [elem kw v]
  (h/do! elem :class {(format-accordion (name kw)) v}))

(defmethod uk-accordion! ::accordion
  [elem _ v]
  (uk/accordion elem v))

(h/defelem accordion [{:keys [accordion] :or {accordion {}} :as attr} kids]
  (h/ul
    (dissoc attr :accordion)
    ::accordion accordion
    kids))

(h/defelem title [attr kids]
  (h/a attr ::title true kids))

(h/defelem content [attr kids]
  (h/div attr ::content true kids))
