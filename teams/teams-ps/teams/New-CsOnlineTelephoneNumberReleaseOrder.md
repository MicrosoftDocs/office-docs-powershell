---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: Microsoft.Teams.ConfigAPI.Cmdlets
online version:online version: https://learn.microsoft.com/powershell/module/teams/New-csonlinetelephonenumberreleaseorder
applicable: Microsoft Teams
title: New-CsOnlineTelephoneNumberReleaseOrder
author: pavellatif
ms.author: pavellatif
ms.reviewer: pavellatif
manager: roykuntz
schema: 2.0.0
---

# New-CsOnlineTelephoneNumberReleaseOrder

## SYNOPSIS
This cmdlet creates a request to release Direct Routing telephone numbers from Microsoft Teams telephone number management inventory. 

## SYNTAX

```
New-CsOnlineTelephoneNumberReleaseOrder [-TelephoneNumber <String>] [-StartingNumber <String>] [-EndingNumber <String>] [-FileContent <Byte[]>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet releases existing Direct Routing telephone numbers from Microsoft Teams telephone number management inventory. Once released the phone numbers will not be visible in Teams PowerShell as acquired Direct Routing phone numbers. A maximum of 1,000 phone numbers can be released at a time. If more than 1,000 numbers need to be released, the requests should be divided into multiple increments of up to 1,000 numbers.

The cmdlet is an asynchronous operation and will return an OrderId as output. You can use the [Get-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumberorder) cmdlet to check the status of the OrderId, including any error or warning messages that might result from the operation: `Get-CsOnlineTelephoneNumberOrder -OrderType Release -OrderId "orderId"`.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsOnlineTelephoneNumberReleaseOrder -TelephoneNumber "+123456789"
cdf3073a-6fbb-4ade-a8af-e8fa1f3b9c13
```

In this example, a new Direct Routing telephone number "+123456789" is being released from Microsoft Teams telephone number management inventory. The output of the cmdlet is the OrderId that can be used with the [Get-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumberorder) cmdlet to retrieve the status of the order: `Get-CsOnlineTelephoneNumberOrder -OrderType Release -OrderId "orderId"`.

### Example 2
```powershell
PS C:\> New-CsOnlineTelephoneNumberReleaseOrder -TelephoneNumber "+123456789,+134567890,+145678901"
cdf3073a-6fbb-4ade-a8af-e8fa1f3b9c13
```

In this example, a list of Direct Routing telephone numbers are being released from Microsoft Teams telephone number management. The output of the cmdlet is the OrderId that can be used with the [Get-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumberorder) cmdlet to retrieve the status of the order: `Get-CsOnlineTelephoneNumberOrder -OrderType Release -OrderId "orderId"`.

### Example 3
```powershell
PS C:\> New-CsOnlineTelephoneNumberReleaseOrder -StartingNumber "+12000000" -EndingNumber "+12000009"
cdf3073a-6fbb-4ade-a8af-e8fa1f3b9c13
```

In this example, a range of Direct Routing telephone numbers from "+12000000" to "+12000009" are being released from Microsoft Teams telephone number management. The output of the cmdlet is the OrderId that can be used with the [Get-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumberorder) cmdlet to retrieve the status of the order: `Get-CsOnlineTelephoneNumberOrder -OrderType Release -OrderId "orderId"`.

### Example 4
```powershell
PS C:\> $drlist = [System.IO.File]::ReadAllBytes("C:\Users\testuser\DrNumber.csv")
PS C:\> New-CsOnlineTelephoneNumberReleaseOrder -FileContent $drlist
cdf3073a-6fbb-4ade-a8af-e8fa1f3b9c13
```

In this example, the content of a file with a list of Direct Routing telephone numbers are being released via file upload. The file should be in Comma Separated Values (CSV) file format and should only contain the list of DR numbers to be released. The New-CsOnlineTelephoneNumberReleaseOrder cmdlet is only used to pass the content. To read the output of this cmdlet and retrieve the status of your order, you can use OrderId with the [Get-CsOnlineTelephoneNumberOrder](./get-csonlinetelephonenumberorder.md) cmdlet : `Get-CsOnlineTelephoneNumberOrder -OrderType Release -OrderId "orderId"`.

## PARAMETERS

### -TelephoneNumber
This is the Direct Routing telephone number you wish to release from Microsoft Teams telephone number management inventory.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartingNumber
This is the starting number of a range of Direct Routing telephone number you wish to release from Microsoft Teams telephone number management inventory.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndingNumber
This is the ending number of a range of Direct Routing telephone number you wish to release from Microsoft Teams telephone number management inventory. 

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileContent
This is the content of a .csv file that includes the Direct Routing telephone numbers to be released from the Microsoft Teams telephone number management inventory. This parameter can be used to release up to 1,000 numbers at a time. 

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.String

## NOTES
The cmdlet is available in Teams PowerShell module 6.7.1 or later.

The cmdlet is only available in commercial and GCC cloud instances.

## RELATED LINKS
[Get-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumberorder)
[New-CsOnlineDirectRoutingTelephoneNumberUploadOrder](https://learn.microsoft.com/powershell/module/teams/new-csonlinedirectroutingtelephonenumberuploadorder)