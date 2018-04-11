---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Get-UnifiedGroupLinks
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Get-UnifiedGroupLinks

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-UnifiedGroupLinks cmdlet to view membership and ownership information for Office 365 groups in your cloud-based organization. To view other properties for Office 365 groups, use the Get-UnifiedGroup cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-UnifiedGroupLinks [-Identity] <UnifiedGroupIdParameter>
 -LinkType <Members | Owners | Subscribers | Aggregators | EventSubscribers> [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
Office 365 groups are group objects that are available across Office 365 services.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-UnifiedGroupLinks -Identity "Human Resources Department" -LinkType Members
```

This example show the members of the Office 365 Group named Human Resources Department

## PARAMETERS

### -Identity
The Identity parameter specifies the Office 365 Group that you want to view. You can use any value that uniquely identifies the Office 365 Group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: UnifiedGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -LinkType
The LinkType parameter specifies the Office 365 Group property that you want to view. Valid values are:

- EventSubscribers

- Members

- Owners

- Subscribers

```yaml
Type: Members | Owners | Subscribers | Aggregators | EventSubscribers
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
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

[Online Version](https://technet.microsoft.com/library/b7f00aad-61ae-4ca8-8a3d-9efd28bbbbd0.aspx)
