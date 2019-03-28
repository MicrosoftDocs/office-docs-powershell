---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
applicable: Exchange Online
title: Upgrade-DistributionGroup
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Upgrade-DistributionGroup

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Upgrade-DistributionGroup cmdlet to upgrade distribution groups to Office 365 groups. This cmdlet only works on distribution groups, not mail-enabled security groups.

Note: Before you use this cmdlet, verify there are no email address policies that you created with the IncludeUnifiedGroupRecipients parameter; otherwise the command will fail. Remove and recreate the email address policies after you upgrade your distribution groups to Office 365 groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Upgrade-DistributionGroup [-DlIdentities] <MultiValuedProperty> [-ActionType <String>]
 [-ExecutingUser <RecipientIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Upgrade-DistributionGroup -DlIdentities hr@contoso.com,finance@contoso.com
```

This example upgrades the specified distribution groups to Office 365 groups.

## PARAMETERS

### -DlIdentities
The DlIdentities parameter specifies the email address of the distribution group that you want to upgrade to an Office 365 Group.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActionType
This parameter is reserved for internal Microsoft use.

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

### -ExecutingUser
This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter
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

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/5a220f26-585d-4aa7-812d-9fbcd29979ab.aspx)
