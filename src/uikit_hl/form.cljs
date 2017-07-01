(ns uikit-hl.form
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *danger*  nil)
(def ^:dynamic *success* nil)

(def ^:dynamic *small*  nil)
(def ^:dynamic *large*  nil)

(def ^:dynamic *width-large*  nil)
(def ^:dynamic *width-medium* nil)
(def ^:dynamic *width-small*  nil)
(def ^:dynamic *width-xsmall* nil)

(def ^:dynamic *blank* nil)

(def ^:dynamic *stacked* nil)
(def ^:dynamic *horizontal* nil)

(hl/defelem form [attr kids]
  (let [stacked    (:stacked    attr *stacked*)
        horizontal (:horizontal attr *horizontal*)]
    (hl/form (core/assoc-class attr {:uk-form-stacked    stacked
                                    :uk-form-horizontal horizontal}) kids)))

(hl/defelem input [attr kids]
  (let [danger       (:danger       attr *danger*)
        success      (:success      attr *success*)
        small        (:small        attr *small*)
        large        (:large        attr *large*)
        width-large  (:width-large  attr *width-large*)
        width-medium (:width-medium attr *width-medium*)
        width-small  (:width-small  attr *width-small*)
        width-xsmall (:width-xsmall attr *width-xsmall*)
        blank        (:blank        attr *blank*)
        attr         (dissoc        attr :danger :success :small :large :blank
                                         :width-large :width-medium :width-small
                                         :width-xsmall)]
    (hl/input (core/assoc-class attr {:uk-input             true
                                      :uk-form-danger       danger
                                      :uk-form-success      success
                                      :uk-form-small        small
                                      :uk-form-large        large
                                      :uk-form-width-large  width-large
                                      :uk-form-width-medium width-medium
                                      :uk-form-width-small  width-small
                                      :uk-form-width-xsmall width-xsmall
                                      :uk-form-blank        blank}) kids)))

(hl/defelem fieldset [attr kids]
  (let []
    (hl/fieldset (core/assoc-class attr {:uk-fieldset true}) kids)))

(hl/defelem legend [attr kids]
  (let []
    (hl/legend (core/assoc-class attr {:uk-legend true}) kids)))

(hl/defelem checkbox [attr kids]
  (let [attr (assoc attr :type "checkbox")]
    (hl/label [(hl/input (core/assoc-class attr {:uk-checkbox true})) " " kids])))
