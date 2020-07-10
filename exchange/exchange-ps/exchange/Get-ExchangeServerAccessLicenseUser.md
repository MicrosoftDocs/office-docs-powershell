---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-exchangeserveraccesslicenseuser
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-ExchangeServerAccessLicenseUser
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Get-ExchangeServerAccessLicenseUser

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ExchangeServerAccessLicenseUser cmdlet to return a list of unique users for the specified license name. Each object contains the FQDN or primary SMTP address of the mailbox and the license that's associated with it.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ExchangeServerAccessLicenseUser -LicenseName <String> [<CommonParameters>]
```

## DESCRIPTION
The Get-ExchangeServerAccessLicenseUser cmdlet returns a collection of unique users for the specified license name. The list of unique users represents an estimate of your licenses when you run this cmdlet. Each object contains the FQDN or primary SMTP address of the mailbox and the license name to which it's associated.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ExchangeServerAccessLicenseUser -LicenseName "Exchange Server 2016 Standard Edition"
```

This example returns the unique users for the license named Exchange Server 2016 Standard Edition.

## PARAMETERS

### -LicenseName
The LicenseName parameter specifies the license type that you want to view. You can find the available license type values by running the Get-ExchangeServerAccessLicense cmdlet. Valid values are:

- Exchange Server \<Version\> Standard CAL

- Exchange Server \<Version\> Enterprise CAL

- Exchange Server \<Version\> Standard Edition

- Exchange Server \<Version\> Enterprise Edition

The \<Version\> value is 2013, 2016, or 2019.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
