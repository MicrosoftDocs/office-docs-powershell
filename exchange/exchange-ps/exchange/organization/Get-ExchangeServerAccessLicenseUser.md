---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-ExchangeServerAccessLicenseUser
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Get-ExchangeServerAccessLicenseUser

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ExchangeServerAccessLicenseUser cmdlet to return a list of unique users for the specified license name. Each object contains the FQDN or primary SMTP address of the mailbox and the license that's associated with it.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ExchangeServerAccessLicenseUser -LicenseName <String> [<CommonParameters>]
```

## DESCRIPTION
The Get-ExchangeServerAccessLicenseUser cmdlet returns a collection of unique users for the specified license name. The list of unique users represents an estimate of your licenses when you run this cmdlet. Each object contains the FQDN or primary SMTP address of the mailbox and the license name to which it's associated.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ExchangeServerAccessLicenseUser -LicenseName "Exchange Server 2016 Standard Edition"
```

This example returns the unique users for the license named Exchange Server 2016 Standard Edition.

## PARAMETERS

### -LicenseName
The LicenseName parameter specifies the license type that you want to view. You can find the available license type values by running the Get-ExchangeServerAccessLicense cmdlet. Valid values are:

- Exchange Server 2016 Standard CAL

- Exchange Server 2016 Enterprise CAL

- Exchange Server 2016 Standard Edition

- Exchange Server 2016 Enterprise Edition

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/de51a293-5c86-4767-9add-1b32f0a1ccd3.aspx)
