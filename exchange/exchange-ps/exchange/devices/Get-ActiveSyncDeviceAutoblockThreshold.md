---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xmll
applicable: Exchange Server 2013, Exchange Server 2016
title: Get-ActiveSyncDeviceAutoblockThreshold
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# Get-ActiveSyncDeviceAutoblockThreshold

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ActiveSyncDeviceAutoblockThreshold cmdlet to obtain the Autoblock settings for Microsoft Exchange ActiveSync mobile devices..

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ActiveSyncDeviceAutoblockThreshold [[-Identity] <ActiveSyncDeviceAutoblockThresholdIdParameter>]
 [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
Microsoft Exchange and Exchange ActiveSync have the capability to block Exchange ActiveSync mobile devices if these devices display any of a defined list of behaviors that have the capability to cause issues with the server. The Get-ActiveSyncDeviceAutoblockThreshold cmdlet returns the settings for the requested threshold rule.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ActiveSyncDeviceAutoblockThreshold -Identity "UserAgentChanges"
```

This example retrieves the threshold settings for the Autoblock threshold rule for UserAgentChanges.

## PARAMETERS

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the name of the Autoblock threshold rule.

```yaml
Type: ActiveSyncDeviceAutoblockThresholdIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/1dc9974b-de67-47d2-a177-c358c9fe366b.aspx)
