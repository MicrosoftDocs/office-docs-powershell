---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Get-AdministrativeUnit
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Get-AdministrativeUnit

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-AdministrativeUnit cmdlet to view administrative units, which are Azure Active Directory containers of resources. You can use administrative units to delegate administrative permissions and apply policies to different groups of users.

Note: Administrative units are only available in Azure Active Directory Premium. You create and manage administrative units in Azure AD PowerShell.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-AdministrativeUnit [[-Identity] <AdministrativeUnitIdParameter>] [-Confirm] [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-AdministrativeUnit
```

This example returns a summary list of all Azure Active Directory administrative units.

### -------------------------- Example 2 --------------------------
```
Get-AdministrativeUnit -Identity "West Coast" | Format-List
```

This example returns detailed information about the administrative unit with the display name West Coast.

## PARAMETERS

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the administrative unit that you want to view. You can use any value that uniquely identifies the administrative unit. For example:

- Display name (this value is the same in Azure AD PowerShell)

- ExternalDirectoryObjectId (this GUID value is the same as the ObjectId property in Azure AD PowerShell)

- Name (GUID value)

- Distinguished name (DN)

- GUID (different value than Name)

```yaml
Type: AdministrativeUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

[Online Version](https://technet.microsoft.com/library/cadcbb11-66a3-4f22-a169-161c15f1e315.aspx)
