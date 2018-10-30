---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Update-ExchangeHelp
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Update-ExchangeHelp

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Update-ExchangeHelp cmdlet to find, download and install the latest available help topics for the Exchange Management Shell on the local computer. If an available version is found based your installed version and languages of Exchange, the cmdlet downloads and integrates the updated version of Help in the Exchange Management Shell. This cmdlet is a required substitute for the Update-Help cmdlet that's available in Windows PowerShell.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Update-ExchangeHelp [-Force] [<CommonParameters>]
```

## DESCRIPTION
The Update-ExchangeHelp cmdlet is available in Exchange Server 2013 or later.

You need to run the Update-ExchangeHelp cmdlet on each Exchange server. By default, the cmdlet requires an Internet connection, but you can configure an offline mode. For more information, see Use Update-ExchangeHelp to update Exchange PowerShell help topics on Exchange servers (https://technet.microsoft.com/library/mt588490.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Update-ExchangeHelp -Force
```

This example checks for the latest available version of Help for the Exchange Management Shell on the local computer. Because we used the Force switch, the command checks for updates even if you ran the command less than 24 hours ago and displays status and error messages.

## PARAMETERS

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

By default, the Update-ExchangeHelp cmdlet has a throttling period of 24 hours. If you run this cmdlet within 24 hours of the last time you ran it, it won't check for updates. You can use this switch to force the cmdlet to check for updates more frequently and to display status or error messages.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
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

[Online Version](https://technet.microsoft.com/library/3ab76294-cde8-4a15-9949-eb744713dd65.aspx)
