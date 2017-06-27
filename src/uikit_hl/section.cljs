(ns uikit-hl.section
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-section* "")
(def ^:dynamic *default*    nil)
(def ^:dynamic *muted*      nil)
(def ^:dynamic *primary*    nil)
(def ^:dynamic *secondary*  nil)
(def ^:dynamic *media*      nil)
(def ^:dynamic *xsmall*     nil)
(def ^:dynamic *small*      nil)
(def ^:dynamic *large*      nil)
(def ^:dynamic *xlarge*     nil)
(def ^:dynamic *overlap*    nil)

(hl/defelem section [attr kids]
  (let [default   (:default   attr *default*)
        muted     (:muted     attr *muted*)
        primary   (:primary   attr *primary*)
        secondary (:secondary attr *secondary*)
        media     (:media     attr *media*)
        xsmall    (:xsmall    attr *xsmall*)
        small     (:small     attr *small*)
        large     (:large     attr *large*)
        xlarge    (:xlarge    attr *xlarge*)
        overlap   (:overlap   attr *overlap*)
        attr      (dissoc     attr :default :muted :primary :secondary :media
                                   :xsmall :small :large :xlarge :overlap)]
    (hl/div (core/assoc-class attr {:uk-section           true
                                    :uk-section-default   default
                                    :uk-section-muted     muted
                                    :uk-section-primary   primary
                                    :uk-section-secondary secondary
                                    :uk-section-media     media
                                    :uk-section-xsmall    xsmall
                                    :uk-section-small     small
                                    :uk-section-large     large
                                    :uk-section-xlarge    xlarge
                                    :uk-section-overlap   overlap}) kids)))
