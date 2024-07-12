---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: Microsoft.Teams.ConfigAPI.Cmdlets
online version: https://learn.microsoft.com/powershell/module/teams/get-csexportacquiredphonenumberstatus
applicable: Microsoft Teams
title: Get-CsExportAcquiredPhoneNumberStatus
author: pavellatif
ms.author: pavellatif
ms.reviewer:
manager: roykuntz
schema: 2.0.0
---

# Get-CsExportAcquiredPhoneNumberStatus

## SYNOPSIS
This cmdlet shows the status of the Export-CsAcquiredPhoneNumber cmdlet. 

## SYNTAX

### Get-CsExportAcquiredPhoneNumberStatus (Default)
```
Get-CsExportAcquiredPhoneNumberStatus -OrderId <String> 
```

## DESCRIPTION
This cmdlet returns the status of the [Export-CsAcquiredPhoneNumber](Export-CsAcquiredPhoneNumber.md) operation. The response will include the download link to the file if operation has been completed.

By Default the download link will remain active for 1 hour. 

## EXAMPLES

### Example 1
```powershell
Get-CsExportAcquiredPhoneNumberStatus -OrderId 0e923e2c-ab0e-4b7a-be5a-906be8c
```
This example displays the OrderId of the export acquired phone numbers operation. The OrderId can be used to get the download link for the file.

## PARAMETERS

### -OrderId
Filters the returned results to only show the indicated properties in the file.
```yaml
Type: String
Parameter Sets: (All)
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

### -OrderId

## OUTPUTS

### Pending
The output shows the status Pending when the request is created but processing has not been started. 

```yaml
Id			: 0e923e2c-af0e-4b7a-be5a-906be8c
CreatedAt	    	: 6/24/2024 9:26:44 PM
CreatedBy	      	: admin1@contoso.com
Status		      	: Pending
DownloadLinkExpiry	: null
DownloadLink	    	: null
```

### InProgress
The output shows the status InProgress when the request is being processed. 

```yaml
Id			: 0e923e2c-af0e-4b7a-be5a-906be8c
CreatedAt      		: 6/24/2024 9:26:44 PM
CreatedBy	      	: admin1@contoso.com
Status	      		: InProgress
DownloadLinkExpiry	: null
DownloadLink	    	: null
```

### Success
The output shows the status Success with download link and expiry date for the link when the request is completed successfully. 

```yaml
Id				: 0e923e2c-ab0e-4b7a-be5a-906be8c
CreatedAt	      		: 6/24/2024 9:16:44 PM
CreatedBy		      	: admin1@contoso.com
Status		      		: Success
DownloadLinkExpiry		: 6/24/2024 10:17:29 PM
DownloadLink	 	   	: https://<downloadLink>
```


## NOTES

The cmdlet is available in Teams PowerShell module 6.1.0 or later. 

The cmdlet is only available in commercial and GCC cloud instances.

## RELATED LINKS
[Export-CsAcquiredPhoneNumber](Export-CsAcquiredPhoneNumber.md)
