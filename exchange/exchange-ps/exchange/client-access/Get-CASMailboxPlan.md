---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Online
title: Get-CASMailboxPlan
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-CASMailboxPlan

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-CASMailboxPlan cmdlet to view Client Access services (CAS) mailbox plans in cloud-based organizations.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-CASMailboxPlan [[-Identity] <MailboxPlanIdParameter>]
 [-Credential <PSCredential>]
 [-Filter <String>]
 [-IgnoreDefaultScope]
 [-ResultSize <Unlimited>]
 [-SortBy <String>] [<CommonParameters>]
```

## DESCRIPTION
A CAS mailbox plan is tied to the corresponding mailbox plan that has the same name (and display name). Like mailbox plans, CAS mailbox plans correspond to license types, and are applied to a mailbox when you license the user. The availability of a CAS mailbox plan is determined by your selections when you enroll in the service and the age of your organization.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CASMailboxPlan | Format-Table -Auto DisplayName,ActiveSyncEnabled,ImapEnabled,PopEnabled,OwaMailboxPolicy
```

This example returns a summary list of all CAS mailbox plans in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CASMailboxPlan -Identity ExchangeOnlineEnterprise
```

This example returns detailed information about the specified CAS mailbox plan.

## PARAMETERS

### -Identity
The Identity parameter specifies the CAS mailbox plan that you want to view. You can use any value that uniquely identifies the CAS mailbox plan. For example:

- Name

- Distinguished name (DN)

- GUID

The display name and name of the CAS mailbox plan is the same as the corresponding mailbox plan (for example, ExchangeOnlineEnterprise and ExchangeOnlineEnterprise-\<GUID\>).

```yaml
Type: MailboxPlanIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Credential
The Credential parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter indicates the OPath filter used to filter recipients.

For more information about the filterable properties, see Filterable properties for the -Filter parameter (https://technet.microsoft.com/library/bb738155.aspx).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortBy
The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following attributes:

- DisplayName

- Name

The results are sorted in ascending order.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
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

[Online Version](https://technet.microsoft.com/library/c8df374b-db7c-4dbc-b6d5-3ffcbbe4274b.aspx)
