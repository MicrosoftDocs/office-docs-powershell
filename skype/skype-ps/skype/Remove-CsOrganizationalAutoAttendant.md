---
external help file: Remove-CsOrganizationalAutoAttendant.xml
applicable: Skype for Business Online
title: Remove-CsOrganizationalAutoAttendant
schema: 2.0.0
---

# Remove-CsOrganizationalAutoAttendant

## SYNOPSIS
Use the Remove-CsOrganizationalAutoAttendant cmdlet to delete an Auto Attendant (AA).

## SYNTAX

```
Remove-CsOrganizationalAutoAttendant [-PrimaryUri] <Uri> [-ApplicationId <Guid>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Remove-CsOrganizationalAutoAttendant cmdlet deletes an OAA that is specified by using the PrimaryUri parameter.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsOrganizationalAutoAttendant -PrimaryUri "sip:mainoaa@contoso.com"
```

This example deletes the OAA that has a Primary URI of sip:mainoaa@contoso.com.


## PARAMETERS

### -PrimaryUri
The PrimaryUri parameter represents the SIP address for the OAA to be removed.


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
The Remove-CsOrganizationalAutoAttendant cmdlet accepts a string as the PrimaryUri parameter.


## OUTPUTS

### None


## NOTES

## RELATED LINKS

[New-CsOrganizationalAutoAttendant](New-CsOrganizationalAutoAttendant.md)

[Get-CsOrganizationalAutoAttendant](Get-CsOrganizationalAutoAttendant.md)

[Set-CsOrganizationalAutoAttendant](Set-CsOrganizationalAutoAttendant.md)
