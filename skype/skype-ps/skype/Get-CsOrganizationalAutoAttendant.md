---
external help file: Get-CsOrganizationalAutoAttendant.xml
title: Get-CsOrganizationalAutoAttendant
schema: 2.0.0
---

# Get-CsOrganizationalAutoAttendant

## SYNOPSIS
Use the Get-CsOrganizationalAutoAttendant cmdlet to get information about Auto Attendants (AAs). 

## SYNTAX

```
Get-CsOrganizationalAutoAttendant [-PrimaryUri] <Uri> [-First <UInt64>] [-Skip <UInt64>] [-IncludeStatus] [-ApplicationId <Guid>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOrganizationalAutoAttendant cmdlet returns information about the OAAs in your organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOrganizationalAutoAttendant
```

This example gets all OAAs in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsOrganizationalAutoAttendant -PrimaryUri sip:mainoaa@contoso.com
```

This example gets the OAAs that has the Primary URI of sip:mainoaa@contoso.com.

### -------------------------- Example 3 --------------------------
```
Get-CsOrganizationalAutoAttendant -First 10
```

This example gets the first ten auto attendants configured for use in the organization.

### -------------------------- Example 4 --------------------------
```
Get-CsOrganizationalAutoAttendant -Skip 5 -First 10
```

This example skips initial 5 auto attendants and gets the next 10 OAAs configured for use in the organization.


## PARAMETERS

### -PrimaryUri
The PrimaryUri parameter represents the SIP address for the OAA to be retrieved. If this parameter is not specified, then all created OAAs in the organization are returned.

```yaml
Type: System.Uri
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -First
The First parameter indicates the maximum number of auto attendants to retrieve as the result. It is intended to be used for pagination purposes.

```yaml
Type: System.UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skip
The Skip parameter indicates the number of initial auto attendants to skip in the result. It is intended to be used for pagination purposes.

```yaml
Type: System.UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeStatus
If specified, the status records for each auto attendant in the result set are also retrieved.

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

### String
The String is used as the PrimaryUri input.


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.OrgAutoAttendant 


## NOTES


## RELATED LINKS

[New-CsOrganizationalAutoAttendant](New-CsOrganizationalAutoAttendant.md)

[Set-CsOrganizationalAutoAttendant](Set-CsOrganizationalAutoAttendant.md)

[Remove-CsOrganizationalAutoAttendant](Remove-CsOrganizationalAutoAttendant.md)

