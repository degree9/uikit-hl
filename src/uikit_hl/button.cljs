(ns uikit-hl.button
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *default*   nil)
(def ^:dynamic *primary*   nil)
(def ^:dynamic *secondary* nil)
(def ^:dynamic *danger*    nil)
(def ^:dynamic *text*      nil)
(def ^:dynamic *link*      nil)

(def ^:dynamic *small*     nil)
(def ^:dynamic *large*     nil)

(hl/defelem button [attr kids]
  (let [default   (:default   attr *default*)
        primary   (:primary   attr *primary*)
        secondary (:secondary attr *secondary*)
        danger    (:danger    attr *danger*)
        text      (:text      attr *text*)
        link      (:link      attr *link*)
        small     (:small     attr *small*)
        large     (:large     attr *large*)
        attr      (dissoc     attr :default :primary :secondary :danger :text
                                   :link :small :large)]
    (hl/button
      (core/assoc-class attr
        {:uk-button           true
         :uk-button-default   default
         :uk-button-primary   primary
         :uk-button-secondary secondary
         :uk-button-danger    danger
         :uk-button-text      text
         :uk-button-link      link
         :uk-button-small     small
         :uk-button-large     large})
      kids)))

(hl/defelem a-button [attr kids]
  (let [default   (:default   attr *default*)
        primary   (:primary   attr *primary*)
        secondary (:secondary attr *secondary*)
        danger    (:danger    attr *danger*)
        text      (:text      attr *text*)
        link      (:link      attr *link*)
        small     (:small     attr *small*)
        large     (:large     attr *large*)
        attr      (dissoc     attr :default :primary :secondary :danger :text
                                   :link :small :large)]
    (hl/a
      (core/assoc-class attr
        {:uk-button           true
         :uk-button-default   default
         :uk-button-primary   primary
         :uk-button-secondary secondary
         :uk-button-danger    danger
         :uk-button-text      text
         :uk-button-link      link
         :uk-button-small     small
         :uk-button-large     large})
      kids)))

(hl/defelem group [attr kids]
  (hl/div (core/assoc-class attr {:uk-button-group true}) kids))
