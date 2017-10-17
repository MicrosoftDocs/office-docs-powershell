---
external help file: 
applicable: Skype for Business Online
title: Get-CsOrganizationalAutoAttendantStatus
schema: 2.0.0
---

# Get-CsOrganizationalAutoAttendantStatus

## SYNOPSIS
Use Get-CsOrganizationalAutoAttendantStatus cmdlet to get the status of an Organizational Auto Attendant (OAA) provisioning.


## SYNTAX

```
Get-CsOrganizationalAutoAttendantStatus [[-PrimaryUri] <Object>] [-ApplicationId <Object>]
 [-BypassDualWrite <Object>] [-DomainController <Object>] [-Force] [-IncludeResources <Object>]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```


## DESCRIPTION
This cmdlet provides a way to return the provisioning status of an organizational auto attendant configured for use in your organization. 


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOrganizationalAutoAttendantStatus -PrimaryUri "sip:mainoaa@contoso.com"
```

In Example 1, the Get-CsOrganizationalAutoAttendantStatus cmdlet is used to get status records for all resources of an organizational auto attendant with Primary URI of sip:mainoaa@contoso.com.

### -------------------------- Example 2 --------------------------
```
Get-CsOrganizationalAutoAttendantStatus -PrimaryUri sip:mainoaa@contoso.com -IncludeResources @("AudioFile")
```

In Example 2, the Get-CsOrganizationalAutoAttendantStatus cmdlet is used to get status records pertaining to audio files only of an organizational auto attendant with Primary URI of sip:mainoaa@contoso.com.

## PARAMETERS

### -ApplicationId
{{Fill ApplicationId Description}}

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
{{Fill BypassDualWrite Description}}

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
{{Fill DomainController Description}}

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
{{Fill Force Description}}

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

### -IncludeResources
PARAMVALUE: System.Collections.Generic.List

The IncludeResources parameter identities the organizational auto attendant resources whose status is to be retrieved. Available resources are:
- AudioFile: Indicates status for audio files used by OAA.
- DialByNameVoiceResponses: Indicates status for speech recognition when using dial-by-name (directory lookup) feature with OAA.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Accepted values: AudioFile, DialByNameVoiceResponses, SipProvisioning
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryUri
PARAMVALUE: System.Uri
The Primary URI represents the SIP address of the organizational auto attendant whose provisioning status is to be retrieved.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### The Get-CsOrganizationalAutoAttendantStatus cmdlet accepts a string as the PrimaryUri parameter.

## OUTPUTS

### The Get-CsOrganizationalAutoAttendantStatus cmdlet returns instances of the Microsoft.Rtc.Management.OAA.Models.StatusRecord object.

## NOTES

## RELATED LINKS
