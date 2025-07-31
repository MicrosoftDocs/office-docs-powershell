---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
online version: https://learn.microsoft.com/powershell/module/teams/get-csexportacquiredphonenumberstatus
schema: 2.0.0
title: Get-CsExportAcquiredPhoneNumberStatus
---

# Get-CsExportAcquiredPhoneNumberStatus

## SYNOPSIS
This cmdlet shows the status of the [Export-CsAcquiredPhoneNumber](https://learn.microsoft.com/powershell/module/teams/export-csacquiredphonenumber) cmdlet.

## SYNTAX

### Get-CsExportAcquiredPhoneNumberStatus (Default)
```
Get-CsExportAcquiredPhoneNumberStatus -OrderId <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns OrderId status from the respective [Export-CsAcquiredPhoneNumber](https://learn.microsoft.com/powershell/module/teams/export-csacquiredphonenumber) operation. The response will include the download link to the file if operation has been completed.

By default, the download link will remain active for 1 hour.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsExportAcquiredPhoneNumberStatus -OrderId 0e923e2c-ab0e-4b7a-be5a-906be8c
```
```output
Id                   : 0e923e2c-ab0e-4b7a-be5a-906be8c
CreatedAt            : 2024-08-29 21:50:54Z
status               : Success
DownloadLinkExpiry   : 2024-08-29 22:51:17Z
DownloadLink         : <link>
```
This example displays the status of the export acquired phone numbers operation. The OrderId is the output from [Export-CsAcquiredPhoneNumber](https://learn.microsoft.com/powershell/module/teams/export-csacquiredphonenumber) cmdlet. The status contains the download link for the file along with expiry date.

### Example 2
```powershell
PS C:\> Get-CsExportAcquiredPhoneNumberStatus -OrderId $orderId
```
```output
Id                   : 0e923e2c-ab0e-4b7a-be5a-906be8c
CreatedAt            : 2024-08-29 21:50:54Z
status               : Success
DownloadLinkExpiry   : 2024-08-29 22:51:17Z
DownloadLink         : <link>
```
This example displays the status of the export acquired phone numbers operation with the use of a variable named "orderId".

### Example 3
```powershell
PS C:\> $order = Get-CsExportAcquiredPhoneNumberStatus -OrderId $orderId
PS C:\> $order
```
```output
Id                   : 0e923e2c-ab0e-4b7a-be5a-906be8c
CreatedAt            : 2024-08-29 21:50:54Z
status               : Success
DownloadLinkExpiry   : 2024-08-29 22:51:17Z
DownloadLink         : <link>
```
This example stores the [Get-CsExportAcquiredPhoneNumberStatus](https://learn.microsoft.com/powershell/module/teams/get-csexportacquiredphonenumberstatus) cmdlet status for the "orderId" in the variable "order". This will allow a quick view of the order status without typing the cmdlet again.

## PARAMETERS

### -OrderId
The orderId of the ExportAcquiredNumberStatus cmdlet.

```yaml
Type: String
Parameter Sets: Get
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConfigApiBasedCmdletsIdentity

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ISkypeTelephoneNumberMgmtGetExportAcquiredTelephoneNumbersResponse

## NOTES
The cmdlet is available in Teams PowerShell module 6.1.0 or later.

The cmdlet is only available in commercial and GCC cloud instances.

## RELATED LINKS
[Get-CsExportAcquiredPhoneNumberStatus](https://learn.microsoft.com/powershell/module/teams/get-csexportacquiredphonenumberstatus)
