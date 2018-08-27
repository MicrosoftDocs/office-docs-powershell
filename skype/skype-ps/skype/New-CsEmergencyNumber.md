---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsEmergencyNumber
schema: 2.0.0
---

# New-CsEmergencyNumber

## SYNOPSIS
The `New-CsEmergencyNumber` cmdlet creates a new emergency number in your organization. This cmdlet was introduced in Skype for Business Server June 2016 Cumulative Update.

## SYNTAX
```
New-CsEmergencyNumber [-DialMask <String>] -DialString <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet enables you to configure multiple emergency numbers in Skype for Business Server.

Skype for Business Server now supports multiple emergency numbers for a client. Multiple emergency numbers is a new feature introduced in the June 2016 Cumulative Update.

With the November 2016 Cumulative Update, the number of support emergency numbers increases from 5 to 100.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
PS C:\> New-CsEmergencyNumber -DialString 911
```

This example creates a new emergency number with dial string 911.

### -------------------------- EXAMPLE 2 --------------------------
```
PS C:\> New-CsEmergencyNumber -DialString 911 -DialMask 112
```

This example creates a new emergency number with dial string 911 and single dial mask 112.

### -------------------------- EXAMPLE 3 --------------------------
```
PS C:\> New-CsEmergencyNumber -DialString 911 -DialMask 112;999
```

This example creates an emergency number with multiple dial masks.

## PARAMETERS

### -DialMask
For each emergency number, you can specify zero or more emergency dial masks. A dial mask is a number that you want to translate into the value of the emergency dial number value when it is dialed. For example, assume you enter a value of 212 in this field and the emergency dial number field has a value of 911. When a user dials 212, the number will be translated to 911. This allows for alternate emergency numbers to be dialed and still have the call reach emergency services (for example, if someone from a country or region with a different emergency number attempts to dial that country or region's number rather than the number for the country or region they are currently in). You can define multiple emergency dial masks by separating the values with semicolons. For example, 212;414. The string limit for a dial mask is 100 characters. Each character must be a digit 0 through 9.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DialString
Specifies the phone number to call out with this emergency number.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
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

### System.Object

## NOTES

## RELATED LINKS
[New-CsLocationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/new-cslocationpolicy?view=skype-ps)

[Set-CsLocationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/set-cslocationpolicy?view=skype-ps)
