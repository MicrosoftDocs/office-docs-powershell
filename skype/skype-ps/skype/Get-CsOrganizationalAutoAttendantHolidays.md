---
external help file: Get-CsOrganizationalAutoAttendantHolidays.xml
applicable: Skype for Business Online
title: Get-CsOrganizationalAutoAttendantHolidays
schema: 2.0.0
---

# Get-CsOrganizationalAutoAttendantHolidays

## SYNOPSIS
Use Get-CsOrganizationalAutoAttendantHolidays cmdlet to get the holiday information for an existing Auto Attendant (AA).

## SYNTAX

```
Get-CsOrganizationalAutoAttendantHolidays [-PrimaryUri] <Uri> [-Years <List>] [-Names <List>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOrganizationalAutoAttendantHolidays provides a convenient way to visualize the information of all the holidays contained within an auto attendant.

**NOTE**
- **The Holiday feature of auto attendants is currently available to PREVIEW customers only.**

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOrganizationalAutoAttendantHolidays -PrimaryUri "sip:mainoaa@contoso.com"
```

In this example, the Get-CsOrganizationalAutoAttendantHolidays cmdlet is used to get all holidays in an auto attendant with Primary URI of sip:mainoaa@contoso.com.

### -------------------------- Example 2 --------------------------
```
Get-CsOrganizationalAutoAttendantHolidays -PrimaryUri "sip:mainoaa@contoso.com" -Years @(2017)
```

In this example, the Get-CsOrganizationalAutoAttendantHolidays cmdlet is used to get all holidays in year 2017 in an auto attendant with Primary URI of sip:mainoaa@contoso.com.

### -------------------------- Example 3 --------------------------
```
Get-CsOrganizationalAutoAttendantHolidays -PrimaryUri "sip:mainoaa@contoso.com" –Years @(2017) -Name @("Christmas")
```

In this example, the Get-CsOrganizationalAutoAttendantHolidays cmdlet is used to get holiday named Christmas in the year 2017 in an auto attendant with Primary URI of sip:mainoaa@contoso.com.

### -------------------------- Example 4 --------------------------
```
Get-CsOrganizationalAutoAttendantHolidays -PrimaryUri "sip:mainoaa@contoso.com" | Format-Table -Wrap -AutoSize
```

In this example, the Get-CsOrganizationalAutoAttendantHolidays cmdlet is used to retrieve all holidays in an auto attendant with Primary URI of sip:mainoaa@contoso.com and the result is formatted as a table.


## PARAMETERS

### -PrimaryUri
The PrimaryUri parameter represents the SIP address of the auto attendant whose holidays are to be retrieved.

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

### -Years
The Years parameter represents the years for the holidays to be retrieved. If this parameter is not specified, then holidays for all years in the OAA are returned.

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

### -Names
The Names parameter represents the names for the holidays to be retrieved. If this parameter is not specified, then all holidays in the OAA are returned.

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

### Microsoft.Rtc.Management.OAA.Models.HolidayVisRecord


## NOTES


## RELATED LINKS

[Import-CsOrganizationalAutoAttendantHolidays](Import-CsOrganizationalAutoAttendantHolidays.md)

[Export-CsOrganizationalAutoAttendantHolidays](Export-CsOrganizationalAutoAttendantHolidays.md)
