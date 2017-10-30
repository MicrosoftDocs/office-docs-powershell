---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsRgsAnswer
schema: 2.0.0
---

# New-CsRgsAnswer

## SYNOPSIS

Creates a new Response Group answer.
Response Group answers are used to associate a caller response with the appropriate action.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsRgsAnswer -Action <CallAction> [-DtmfResponse <String>] [-Name <String>]
 [-VoiceResponseList <PSListModifier>] [<CommonParameters>]
```

## DESCRIPTION

In order to process calls, the Response Group application often makes a statement or poses a question, then takes action based on the customer response.
For example, the service might ask a caller to press 1 for English or press 2 for Spanish.
After a question l has been posed, the system must wait for the caller to respond, and then take the appropriate action.
In this case, that means transferring the call to an English language queue if the caller presses 1 on the telephone keypad, or transferring the call to a Spanish language queue if the caller presses 2 on the keypad.

Response Group answers are used to analyze caller responses and then take the appropriate action.
For example, if callers are given the option of pressing 1 or 2, then two Response Group answers are required in order to address the situation: one answer to specify the action to be taken if the caller presses 1, and a second answer to specify the action to be taken if the caller presses 2.
These two answers are created by using the New-CsRgsAnswer cmdlet and must then be added to the appropriate Response Group question (the question that asked the callers to press 1 or 2).
Response Group answers must include a set of allowed voice responses (for example, the word "English") or the appropriate telephone keypad response (for example, pressing 1).
Alternatively, you can give customers the option of using either a voice response or a keypad response: either say the word "English" or press 1 on the keypad.
(The speech recognition used in these situations is the language used in the parent workflow.)

Response Group answers cannot be saved and reused with other questions.
For example, suppose you have an answer that transfers a call to voice mail any time a caller presses 9.
You associate that answer with a Response Group question.
Later, you create a new question that also gives callers the option to transfer a call to voice mail by pressing 9.
In that case, you will need to create a new instance of the Response Group answer; there is no way to save answers and then use that saved answer over and over.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

$w = New-CsRgsPrompt -TextToSpeechPrompt "Please hold while we transfer your call."

$x = Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk"

$y = New-CsRgsCallAction -Prompt $w -Action TransferToQueue -QueueID $x.Identity

$a = New-CsRgsAnswer -Action $y -DtmfResponse 1 -VoiceResponseList Yes -Name "New Service Request"
```

The commands shown in Example 1 show how you can create a new Response Group answer that is associated with both a Response Group queue and a Response Group call action.
The first command in the example uses the New-CsRgsPrompt cmdlet to create a TextToSpeechPrompt for the new answer.
After that, the Get-CsRgsQueue cmdlet is called to return an object reference ($x) to the Response Group queue Help Desk.
That object reference is then used in the next command, one that employs New-CsRgsCallAction to create a call action that transfers the caller to the Help Desk queue.
This call action is stored in a variable named $y.

The final command in the example creates a Response Group answer (stored in the variable $a).
This answer accepts either the DTMF response 1 (pressing 1 on the telephone keypad) or the voice response "Yes".

After this answer has been created, it can then be associated with a Response Group question.
For details, see the New-CsRgsQuestion help topic.


## PARAMETERS

### -Action
Indicates the action to be taken any time a caller provides this answer.
The Action parameter must be specified using an object reference created by using the New-CsRgsCallAction cmdlet.
For details, see the Examples section in this topic.

```yaml
Type: CallAction
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DtmfResponse
Indicates the key on the telephone keypad to be pressed in order to match the answer.
For example, if callers are told to press 1 for hardware, then DtmfResponse would be configured like this: `-DtmfResponse 1.`

A single answer can include both a voice response and a dual-tone multifrequency (DTMF) response.
Each answer must have at least one of these two response types.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Name given to the Response Group answer.
Names do not have to be unique.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoiceResponseList
Array of keywords callers can say that will match the answer.
For example, if one option available to callers is "Hardware" then the VoiceResponseList property might be set to this: `-VoiceResponseList "Hardware".`
Multiple keywords can be specified by using comma-separated values.
For example, this parameter value causes either Hardware or Devices to match the answer: -VoiceResponseList Hardware, Devices.
Voice responses should not contain double quote marks, because that character is not recognized by the speech engine.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
New-CsRgsAnswer does not accept pipelined input.

## OUTPUTS

###  
Creates new instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.Answer object.

## NOTES

## RELATED LINKS

[New-CsRgsQuestion](New-CsRgsQuestion.md)

