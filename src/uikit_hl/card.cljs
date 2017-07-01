(ns uikit-hl.card
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *default* nil)
(def ^:dynamic *primary* nil)
(def ^:dynamic *secondary* nil)

(def ^:dynamic *hover* nil)

(def ^:dynamic *small* nil)
(def ^:dynamic *large* nil)

(def ^:dynamic *top*    nil)
(def ^:dynamic *bottom* nil)
(def ^:dynamic *left*   nil)
(def ^:dynamic *right*  nil)

(hl/defelem card [attr kids]
  (let [default   (:default   attr *default*)
        primary   (:primary   attr *primary*)
        secondary (:secondary attr *secondary*)
        hover     (:hover     attr *hover*)
        small     (:small     attr *small*)
        large     (:large     attr *large*)
        attr      (dissoc     attr :default :primary :secondary :hover :small :large)]
    (hl/div (core/assoc-class attr {:uk-card           true
                                    :uk-card-default   default
                                    :uk-card-primary   primary
                                    :uk-card-secondary secondary
                                    :uk-card-hover     hover
                                    :uk-card-small     small
                                    :uk-card-large     large}) kids)))

(hl/defelem media [attr kids]
  (let [top    (:top    attr *top*)
        bottom (:bottom attr *bottom*)
        right  (:right  attr *right*)
        left   (:left   attr *left*)]
    (hl/div (core/assoc-class attr {:uk-card-media-top    top
                                    :uk-card-media-bottom bottom
                                    :uk-card-media-right  right
                                    :uk-card-media-left   left}) kids)))

(hl/defelem header [attr kids]
  (let []
    (hl/div (core/assoc-class attr {:uk-card-header true}) kids)))

(hl/defelem body [attr kids]
  (let []
    (hl/div (core/assoc-class attr {:uk-card-body true}) kids)))

(hl/defelem footer [attr kids]
  (let []
    (hl/div (core/assoc-class attr {:uk-card-footer true}) kids)))

(hl/defelem badge [attr kids]
  (let []
    (hl/div (core/assoc-class attr {:uk-card-badge true}) kids)))

(hl/defelem title [attr kids]
  (let []
    (hl/h3 (core/assoc-class attr {:uk-card-title true}) kids)))
