---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance-content-search/get-compliancesearchaction
applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
title: Get-ComplianceSearchAction
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2016 || exchserver-ps-2019 || o365scc-ps"
---

# Get-ComplianceSearchAction

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ComplianceSearchAction cmdlet to view information about compliance search actions in Exchange Server 2016 and in the Office 365 Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-ComplianceSearchAction [[-Identity] <ComplianceSearchActionIdParameter>]
 [-Case <String>]
 [-Details]
 [-DomainController <Fqdn>]
 [-IncludeCredential]
 [-ResultSize <Unlimited>] [<CommonParameters>]
```

### Preview
```
Get-ComplianceSearchAction [-Preview]
 [-Case <String>]
 [-Details]
 [-DomainController <Fqdn>]
 [-IncludeCredential]
 [-ResultSize <Unlimited>] [<CommonParameters>]
```

### Purge
```
Get-ComplianceSearchAction [-Purge]
 [-Case <String>]
 [-Details]
 [-DomainController <Fqdn>]
 [-IncludeCredential]
 [-ResultSize <Unlimited>] [<CommonParameters>]
```

### Export
```
Get-ComplianceSearchAction [-Export]
 [-Case <String>]
 [-Details]
 [-DomainController <Fqdn>]
 [-IncludeCredential]
 [-ResultSize <Unlimited>] [<CommonParameters>]
```

## DESCRIPTION
After you create and run a compliance search using the New-ComplianceSearch cmdlet, and start the search using the Start-ComplianceSearch cmdlet, you assign a search action using the New-ComplianceSearchAction cmdlet. You use the Get-ComplianceSearchAction cmdlet to track the progress of the compliance search action.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/exchange-server/find-exchange-cmdlet-permissions).

This cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group, and not to the Organization Management role group.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
Get-ComplianceSearchAction
```

This example shows a summary list of all compliance search actions.

### Example 2
```powershell
Get-ComplianceSearchAction -Identity "Case 1234_Preview" | Format-List
```

This example shows details about the compliance search action named "Case 1234\_Preview"

## PARAMETERS

### -Case
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Details
The Details switch specifies whether to include detailed information in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Export
The Export switch filters the results by Export compliance search actions. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Export
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the compliance search action that you want to view. You can use any value that uniquely identifies the compliance search action. For example:

- Name: The compliance search action name uses the syntax \<Compliance Search Name\>\_\<Action\> . For example, Case 1234\_Preview.

- JobRunId (GUID)

```yaml
Type: ComplianceSearchActionIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeCredential
The IncludeCredential switch specifies whether to include the credential in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Preview
The Preview switch filters the results by Preview compliance search actions.

```yaml
Type: SwitchParameter
Parameter Sets: Preview
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Purge
The Purge switch filters the results by Purge compliance search actions.

```yaml
Type: SwitchParameter
Parameter Sets: Purge
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
