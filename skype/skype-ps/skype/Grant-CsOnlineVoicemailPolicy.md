---
external help file: 
applicable: Skype for Business Online
title: Grant-CsOnlineVoicemailPolicy
schema: 2.0.0
---

# Grant-CsOnlineVoicemailPolicy

## SYNOPSIS
Use the Grant-CsOnlineVoicemailPolicy cmdlet to assign a voicemail policy to a user.

## SYNTAX

```
Grant-CsOnlineVoicemailPolicy [[-Identity] <Object>] [[-PolicyName] <Object>] [-Confirm]
 [-DomainController <Object>] [-PassThru] [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet assigns an existing per-user voicemail policy to a user. Voicemail policies are used to manage Voicemail-related features such as transcription. 

You can check whether a user has been granted a per-user voicemail policy by calling a command in this format: 

```
Get-CsOnlineUser "<user identity>" | Select-Object OnlineVoicemailPolicy
```

For example: 
```
Get-CsOnlineUser "Ken Myer" | Select-Object OnlineVoicemailPolicy
```

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```
Grant-CsOnlineVoicemailPolicy -Identity "Ken Myer" -PolicyName "TranscriptionDisabled" 
```

This example assigns the voicemail policy with the Identity TranscriptionDisabled to the user with the display name Ken Myer. 


### -------------------------- Example 2 -------------------------- (Skype for Business Online)
```
Grant-CsOnlineVoicemailPolicy -Identity "sip:ken@contoso.com" -PolicyName "TranscriptionDisabled" 
```

This example assigns the voicemail policy with the Identity TranscriptionDisabled to the user with the SIP address “sip:ken@contoso.com”. 

## PARAMETERS

### -Identity
PARAMVALUE: UserIdParameter

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
PARAMVALUE: String

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
PARAMVALUE: Fqdn

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

### -PassThru
PARAMVALUE: SwitchParameter

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

### -WhatIf
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob

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
String. Accepts a pipelined string value representing the Identity of a user account to which the voice policy is being granted.

## OUTPUTS
By default, the Grant-CsOnlineVoicemailPolicy cmdlet returns no objects or values. However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.


## NOTES

## RELATED LINKS


