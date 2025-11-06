---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/teams/new-phonenumberbulkupdatetagsorder
schema: 2.0.0
title: New-CsPhoneNumberBulkUpdateTagsOrder
---

# New-CsPhoneNumberBulkUpdateTagsOrder

## SYNOPSIS

This cmdlet allows the admin to add/remove one or multiple telephone number tags to a number of telephone numbers at once. 

## SYNTAX

```
New-CsPhoneNumberBulkUpdateTagsOrder [-TagsToAdd <string>] [-TagsToRemove <string>]
 [-PhoneNumbers <string>] [<CommonParameters>]
```

## DESCRIPTION

Creates a bulk update order that adds or removes one or more tags from multiple telephone numbers in a single operation. This cmdlet is designed for administrators who need to efficiently manage telephone numbers at scale, reducing manual effort and ensuring consistency across large sets of telephone numbers. The cmdlet allows maximum 1000 telephone numbers to be updated at a time. Any limitation for [Set-CsPhoneNumberTag](./Set-CsPhoneNumberTag.md) will also apply to this bulk update order. 

## EXAMPLES

### Example 1

```powershell
PS C:\> New-CsPhoneNumberBulkUpdateTagsOrder -PhoneNumbers "17032511428,17032511429,17032511430" -TagsToAdd "HR"
```
```output
Id									OrderType
--									---------
0e923e2c-ab0e-6h8c-be5a-a6gh3rf		NumberUpdate
```
Above example shows how to set a "HR" and "NewYork" tags to multiple telephone numbers. There can be maximum 1000 telephone numbers in one order. 

### Example 2

```powershell
PS C:\> New-CsPhoneNumberBulkUpdateTagsOrder -PhoneNumbers "17032511428,17032511429,17032511430" -TagsToRemove "HR"
```
```output
Id									OrderType
--									---------
0e923e2c-ab0e-6h8c-be5a-wre45fd	NumberUpdate
```
Above example shows how to remove "HR" tag from multiple telephone numbers. There can be maximum 1000 telephone numbers in one order. 

### Example 3

```powershell
PS C:\> New-CsPhoneNumberBulkUpdateTagsOrder -PhoneNumbers "17032511428,17032511429,17032511430" -TagsToAdd "DevOps,London,City Center"
```
```output
Id									OrderType
--									---------
0e923e2c-ab0e-6h8c-be5a-90fac6c		NumberUpdate
```
Above example shows how to add multiple tags to multiple telephone numbers at the same time. There can be maximum 1000 telephone numbers and 10 tags in one order. Any restrictions on number of tags per number and number of characters per tag will be enforced.

### Example 4

```powershell
PS C:\> New-CsPhoneNumberBulkUpdateTagsOrder -PhoneNumbers "17032511428,17032511429,17032511430" -TagsToRemove "DevOps,London,City Center"
```
```output
Id									OrderType
--									---------
0e923e2c-ab0e-6h8c-be5a-906be8c		NumberUpdate
```
Above example shows how to remove multiple tags from multiple telephone numbers at the same time. There can be maximum 1000 telephone numbers and 10 tags in one order.

## PARAMETERS

### -TagsToAdd

These are the tags to be added to telephone numbers.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TagsToRemove

These are the tags to be removed from telephone numbers.


```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneNumbers

These are the list of telephone numbers on which bulk update operation will be performed. 


```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutBuffer, -OutVariable, -PipelineVariable, -ProgressAction, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

The cmdlet is available in Teams PowerShell module 7.7.0 or later.

## RELATED LINKS
[Set-CsPhoneNumberTag](./Set-CsPhoneNumberTag.md)
[Get-CsPhoneNumberTag](./Get-CsPhoneNumberTag.md)
[Remove-CsPhoneNumberTag](./Remove-CsPhoneNumberTag.md)
