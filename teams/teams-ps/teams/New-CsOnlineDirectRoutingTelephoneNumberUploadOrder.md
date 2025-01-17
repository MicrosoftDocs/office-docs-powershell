---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: Microsoft.Teams.ConfigAPI.Cmdlets
online version: https://learn.microsoft.com/powershell/module/teams/new-csonlinedirectroutingtelephonenumberuploadorder
applicable: Microsoft Teams
title: New-CsOnlineDirectRoutingTelephoneNumberUploadOrder
author: pavellatif
ms.author: pavellatif
ms.reviewer: pavellatif
manager: roykuntz
schema: 2.0.0
---

# New-CsOnlineDirectRoutingTelephoneNumberUploadOrder

## SYNOPSIS
This cmdlet creates a request to upload Direct Routing telephone numbers to Microsoft Teams telephone number management inventory. The output of the cmdlet is the orderId of the asynchronous Direct Routing Number creation operation. 

## SYNTAX

```
New-CsOnlineDirectRoutingTelephoneNumberUploadOrder [-TelephoneNumber <String>] [-StartingNumber <String>] [-EndingNumber <String>]
 [-Description <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet uploads Direct Routing telephone numbers to Microsoft Teams telephone number management inventory. Once uploaded the phone numbers will be visible in Teams PowerShell as acquired Direct Routing phone numbers. The cmdlet is an asynchronous operation and will return an OrderId as output. [Get-CsOnlineTelephoneNumberOrder -OrderType DirectRoutingNumberCreation -OrderId <orderId>](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumberorder) cmdlet can be used to check the status of the OrderId including any error or warning message that may result from the operation.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsOnlineDirectRoutingTelephoneNumberUploadOrder -TelephoneNumber "+123456789"
cdf3073a-6fbb-4ade-a8af-e8fa1f3b9c13
```

In this example, a new Direct Routing telephone number "+123456789" is being uploaded to Microsoft Teams telephone number management inventory. The output of the cmdlet is the OrderId that can be used with [Get-CsOnlineTelephoneNumberOrder -OrderType DirectRoutingNumberCreation -OrderId <orderId>](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumberorder) cmdlet to retrieve the status of the order.

### Example 2
```powershell
PS C:\> New-CsOnlineDirectRoutingTelephoneNumberUploadOrder -TelephoneNumber "+123456789,+134567890,+145678901"
cdf3073a-6fbb-4ade-a8af-e8fa1f3b9c14
```

In this example, a list of telephone numbers are being uploaded to Microsoft Teams telephone number management inventory. The output of the cmdlet is the OrderId that can be used with [Get-CsOnlineTelephoneNumberOrder -OrderType DirectRoutingNumberCreation -OrderId <orderId>](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumberorder) cmdlet to retrieve the status of the order.

### Example 3
```powershell
PS C:\> New-CsOnlineDirectRoutingTelephoneNumberUploadOrder -StartingNumber "+12000000" -EndingNumber "+12000009"
cdf3073a-6fbb-4ade-a8af-e8fa1f3b9c13
```

In this example, a range of Direct Routing telephone numbers from "+12000000" to "+12000009" are being uploaded to Microsoft Teams telephone number management inventory. The output of the cmdlet is the OrderId that can be used with [Get-CsOnlineTelephoneNumberOrder -OrderType DirectRoutingNumberCreation -OrderId <orderId>](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumberorder) cmdlet to retrieve the status of the order.

## PARAMETERS

### -TelephoneNumber
This is the Direct Routing telephone number(s) you wish to upload to Microsoft Teams telephone number management inventory. It is comma delimited list of one or more Direct Routing telephone numbers. 

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
This is the starting number of a range of Direct Routing telephone number you wish to upload to Microsoft Teams telephone number management inventory.

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
This is the ending number of a range of Direct Routing telephone number you wish to upload to Microsoft Teams telephone number management inventory. 

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

### -Description
Add a meaningful description that will help you identify the reason for this upload order. 

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
[New-CsOnlineTelephoneNumberReleaseOrder](https://learn.microsoft.com/powershell/module/teams/New-csonlinetelephonenumberreleaseorder)