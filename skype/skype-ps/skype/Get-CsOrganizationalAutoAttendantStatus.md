---
external help file: Get-CsOrganizationalAutoAttendantStatus.xml
applicable: Skype for Business Online
title: Get-CsOrganizationalAutoAttendantStatus
schema: 2.0.0
---

# Get-CsOrganizationalAutoAttendantStatus

## SYNOPSIS
Use Get-CsOrganizationalAutoAttendantStatus cmdlet to get the status of an Auto Attendant (AA) provisioning.


## SYNTAX

```
Get-CsOrganizationalAutoAttendantStatus [-PrimaryUri] <Uri> [-IncludeResources <List>] [-ApplicationId <Guid>] [-Tenant <Guid>] [<CommonParameters>]
```


## DESCRIPTION
This cmdlet provides a way to return the provisioning status of an auto attendant configured for use in your organization. 


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOrganizationalAutoAttendantStatus -PrimaryUri "sip:mainoaa@contoso.com"
```

In Example 1, the Get-CsOrganizationalAutoAttendantStatus cmdlet is used to get status records for all resources of an auto attendant with Primary URI of sip:mainoaa@contoso.com.

### -------------------------- Example 2 --------------------------
```
Get-CsOrganizationalAutoAttendantStatus -PrimaryUri sip:mainoaa@contoso.com -IncludeResources @("AudioFile")
```

In Example 2, the Get-CsOrganizationalAutoAttendantStatus cmdlet is used to get status records pertaining to audio files only of an auto attendant with Primary URI of sip:mainoaa@contoso.com.

## PARAMETERS

### -PrimaryUri
The Primary URI represents the SIP address of the auto attendant whose provisioning status is to be retrieved.

```yaml
Type: System.Uri
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeResources
The IncludeResources parameter identities the auto attendant resources whose status is to be retrieved. Available resources are:
- AudioFile: Indicates status for audio files used by OAA.
- DialByNameVoiceResponses: Indicates status for speech recognition when using dial-by-name (directory lookup) feature with OAA.
- SipProvisioning: Indicates status for calling OAA through its SIP (Primary) URI.

```yaml
Type: System.Collections.Generic.List
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

### -ApplicationId
Specifies a custom application ID to use for auto attendants. This parameter is reserved for Microsoft internal use only.

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

### System.String
The Get-CsOrganizationalAutoAttendantStatus cmdlet accepts a string as the PrimaryUri parameter.

## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.StatusRecord

## NOTES

## RELATED LINKS

[Get-CsOrganizationalAutoAttendant](Get-CsOrganizationalAutoAttendant.md)

