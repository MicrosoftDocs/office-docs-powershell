---
external help file: 
applicable: Skype for Business Online
title: New-CsOrganizationalAutoAttendantMenuOption
schema: 2.0.0
---

# New-CsOrganizationalAutoAttendantMenuOption

## SYNOPSIS
Use the New-CsOrganizationalAutoAttendantMenuOption cmdlet to create a new menu option.

## SYNTAX

```
New-CsOrganizationalAutoAttendantMenuOption [-Action <Object>] [-DtmfResponse <Object>]
 [-BypassDualWrite <Object>] [-CallTarget <Object>] [-DomainController <Object>] [-Force] [-Tenant <Object>]
 [-VoiceResponses <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOrganizationalAutoAttendantMenuOption cmdlet creates a new menu option for the Organizational Auto Attendant (OAA) service. The OAA service uses the menu options to respond to a caller with the appropriate action.


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

This example creates a menu option to transfer the call to an organizational auto attendant when the caller speaks the word "Sales" or presses the 1 key.


## PARAMETERS

### -Action
PARAMVALUE: Microsoft.Rtc.Management.Hosted.OAA.Models.ActionType

The Action parameter represents the action to be taken when the menu option is activated. The Action must be set to one of the following values:

TransferCallToOperator - the call is transferred to the operator.

TransferCallToTarget - The call is transferred to the menu option’s call target.

DisconnectCall - The call is disconnected.


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

### -DtmfResponse
PARAMVALUE: Microsoft.Rtc.Management.Hosted.OAA.Models.DtmfTone

The DtmfResponse parameter indicates the key on the telephone keypad to be pressed to activate the menu option. The DtmfResponse must be set to one of the following values:

Tone0:Tone9 - Corresponds to DTMF tones from 0 to 9.

Automatic - The action is executed without user response.


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

### -BypassDualWrite
PARAMVALUE: $true | $false

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

### -CallTarget
PARAMVALUE: Microsoft.Rtc.Management.Hosted.OAA.Models.CallableEntity

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

### -DomainController
PARAMVALUE: Microsoft.Rtc.Management.Deploy.Fqdn

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
PARAMVALUE: System.Management.Automation.SwitchParameter

```yaml
Type: SwitchParameter
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
PARAMVALUE: Guid

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

### -VoiceResponses
PARAMVALUE: System.Collections.Generic.List

The VoiceResponses parameter represents the voice responses to select a menu option when Voice Responses are enabled for the organizational auto attendant. 

Voice responses are currently limited to one voice response per menu option. 


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

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
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