---
external help file: Update-CsOrganizationalAutoAttendant.xml
applicable: Skype for Business Online
title: Update-CsOrganizationalAutoAttendant
schema: 2.0.0
---

# Update-CsOrganizationalAutoAttendant

## SYNOPSIS
Use Update-CsOrganizationalAutoAttendant cmdlet to force an update of resources associated with an Auto Attendant (AA) provisioning.

## SYNTAX

```
Update-CsOrganizationalAutoAttendant [-PrimaryUri] <Uri> [-ApplicationId <Guid>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet provides a way to update the resources associated with an auto attendant configured for use in your organization. Currently, it repairs the Dial-by-Name recognition status and the SIP provisioning status of an auto attendant.

Note: This cmdlet only triggers the refresh of auto attendant resources. It does not wait until all the resources have been refreshed. The last completed status of auto attendant can be retrieved using Get-CsOrganizationalAutoAttendantStatus cmdlet.  


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Update-CsOrganizationalAutoAttendant -PrimaryUri "sip:mainoaa@contoso.com"
```

In Example 1, the Update-CsOrganizationalAutoAttendant cmdlet is used to update all resources of an auto attendant with Primary URI of sip:mainoaa@contoso.com.

## PARAMETERS

### -PrimaryUri
The Primary URI represents the SIP address of the auto attendant whose resources are to be updated.

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

### -ApplicationId
Specifies a custom application ID to use for OAAs. This parameter is reserved for Microsoft internal use only.

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

### String
The Update-CsOrganizationalAutoAttendant cmdlet accepts a string as the PrimaryUri parameter.


## OUTPUTS

### None


## NOTES

## RELATED LINKS

[Get-CsOrganizationalAutoAttendantStatus](Get-CsOrganizationalAutoAttendantStatus.md)
