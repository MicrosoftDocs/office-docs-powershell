---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineVoicemailUserSettings
schema: 2.0.0
---

# Get-CsOnlineVoicemailUserSettings

## SYNOPSIS
Use the Get-CsOnlineVoicemailUserSettings cmdlet to get information about online voicemail user settings of a specific user.

## SYNTAX

```
Get-CsOnlineVoicemailUserSettings -Identity <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOnlineVoicemailUserSettings cmdlet returns information about online voicemail user settings of a specific user in your organization.

**NOTE** 
- **This cmdlet is currently available to PREVIEW customers only.** 

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineVoicemailUserSettings -Identity sip:user@contoso.com
```

This example gets the online voicemail user settings of user with SIP URI sip:user@contoso.com.

### -------------------------- Example 2 --------------------------
```
Get-CsOnlineVoicemailUserSettings -Identity "00000000-0000-0000-0000-000000000000"
```

This example gets the online voicemail user settings of user with Object ID "00000000-0000-0000-0000-000000000000".


## PARAMETERS

### -Identity
The Identity parameter represents the ID of the specific user in your organization; this can be either a SIP URI or an Object ID.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Voicemail.Models.VoicemailUserSettings


## NOTES


## RELATED LINKS

