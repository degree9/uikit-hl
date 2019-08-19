(ns uikit-hl.button
  (:require [clojure.string :as s]
            [hoplon.core :as h]
            [hoplon.jquery]))

(defmulti uk-button! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-button! elem key val))

(defn- format-button [button]
  (str "uk-button-" button))

(defmethod uk-button! ::default
  [elem kw v]
  (elem :class {(format-button (name kw)) v}))

(defmethod uk-button! ::button
  [elem kw v]
  (h/do! elem :class {:uk-button (clj->js v)}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(h/defelem button [{:keys [default primary secondary danger text link small large] :as attr} kids]
  (let [attr (dissoc attr :default :primary :secondary :danger :text :link :small :large)]
    (h/button
      attr
      ::button    true
      ::default   default
      ::primary   primary
      ::secondary secondary
      ::danger    danger
      ::text      text
      ::link      link
      ::small     small
      ::large     large
      kids)))

(h/defelem a-button [{:keys [default primary secondary danger text link small large] :as attr} kids]
  (let [attr (dissoc attr :default :primary :secondary :danger :text :link :small :large)]
    (h/a
      attr
      ::button    true
      ::default   default
      ::primary   primary
      ::secondary secondary
      ::danger    danger
      ::text      text
      ::link      link
      ::small     small
      ::large     large
      kids)))

(h/defelem group [attr kids]
  (h/div attr ::group true kids))
