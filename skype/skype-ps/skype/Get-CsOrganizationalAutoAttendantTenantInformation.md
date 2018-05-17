---
external help file: Get-CsOrganizationalAutoAttendantTenantInformation.xml
applicable: Skype for Business Online
title: Get-CsOrganizationalAutoAttendantTenantInformation
schema: 2.0.0
---

# Get-CsOrganizationalAutoAttendantTenantInformation

## SYNOPSIS
Gets the default tenant information for Auto Attendant (AA) feature.

## SYNTAX

```
Get-CsOrganizationalAutoAttendantTenantInformation [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOrganizationalAutoAttendantTenantInformation cmdlet gets the default tenant information for Auto Attendant (AA) feature.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOrganizationalAutoAttendantTenantInformation
```

Gets the default auto attendant information for the logged in tenant.


## PARAMETERS

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

### Microsoft.Rtc.Management.Hosted.OAA.Models.TenantInformation

## NOTES

## RELATED LINKS

