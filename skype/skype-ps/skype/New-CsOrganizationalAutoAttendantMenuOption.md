---
external help file: New-CsOrganizationalAutoAttendantMenuOption.xml
title: New-CsOrganizationalAutoAttendantMenuOption
schema: 2.0.0
---

# New-CsOrganizationalAutoAttendantMenuOption

## SYNOPSIS
Use the New-CsOrganizationalAutoAttendantMenuOption cmdlet to create a new menu option.

## SYNTAX

```
New-CsOrganizationalAutoAttendantMenuOption -Action <DisconnectCall | TransferCallToOperator | TransferCallToTarget> -DtmfResponse <Tone0 | Tone1 | Tone2 | Tone3 | Tone4 | Tone5 | Tone6 | Tone7 | Tone8 | Tone9 | Automatic> [-VoiceResponses <Object>] [-CallTarget <Object>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOrganizationalAutoAttendantMenuOption cmdlet creates a new menu option for the Auto Attendant (AA) service. The OAA service uses the menu options to respond to a caller with the appropriate action.


## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
$menuOption = New-CsOrganizationalAutoAttendantMenuOption -Action TransferCallToOperator -DtmfResponse Tone0
```

This example creates a menu option to call the operator when the 0 key is pressed.

### -------------------------- Example 2 -------------------------- 
```
$troubleShootUri = "sip:troubleShoot@contoso.com"
$troubleShootEntity = New-CsOrganizationalAutoAttendantCallableEntity -Identity $troubleShootUri -Type OrganizationalAutoAttendant
$menuOption = New-CsOrganizationalAutoAttendantMenuOption -Action TransferCallToTarget -DtmfResponse Tone1 -VoiceResponses "Sales" -CallTarget $troubleShootEntity
```

This example creates a menu option to transfer the call to an auto attendant when the caller speaks the word "Sales" or presses the 1 key.


## PARAMETERS

### -Action
The Action parameter represents the action to be taken when the menu option is activated. The Action must be set to one of the following values:

- DisconnectCall - The call is disconnected.
- TransferCallToOperator - the call is transferred to the operator.
- TransferCallToTarget - The call is transferred to the menu option’s call target.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DtmfResponse
The DtmfResponse parameter indicates the key on the telephone keypad to be pressed to activate the menu option. The DtmfResponse must be set to one of the following values:

- Tone0 to Tone9 - Corresponds to DTMF tones from 0 to 9.
- Automatic - The action is executed without user response.


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoiceResponses
The VoiceResponses parameter represents the voice responses to select a menu option when Voice Responses are enabled for the auto attendant. 

Voice responses are currently limited to one voice response per menu option. 


```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallTarget
The CallTarget parameter represents the target for call transfer after the menu option is selected. 

CallTarget is required if the action of the menu option is TransferCallToTarget.

Use the New-CsOrganizationalAutoAttendantCallableEntity cmdlet to create new callable entities. 


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.MenuOption


## NOTES

## RELATED LINKS

[New-CsOrganizationalAutoAttendantCallableEntity](New-CsOrganizationalAutoAttendantCallableEntity.md)
