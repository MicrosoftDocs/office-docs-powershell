---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-AdServerSettings

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-AdServerSettings cmdlet to manage the Active Directory Domain Services (AD DS) environment in the current Exchange Management Shell session. The Set-AdServerSettings cmdlet replaces the AdminSessionADSettings session variable that was used in Microsoft Exchange Server 2007.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Set-AdServerSettings cmdlet to manage the Active Directory Domain Services (AD DS) environment in the current Exchange Management Shell session. The Set-AdServerSettings cmdlet replaces the AdminSessionADSettings session variable that was used in Microsoft Exchange Server 2007.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Set-AdServerSettings cmdlet to manage the Active Directory Domain Services (AD DS) environment in the current Exchange Management Shell session. The Set-AdServerSettings cmdlet replaces the AdminSessionADSettings session variable that was used in Exchange Server 2007.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Set-AdServerSettings [-PreferredServer] <Fqdn> [-Confirm] [-RecipientViewRoot <String>]
 [-ViewEntireForest <$true | $false>] [-WhatIf] [<CommonParameters>]
```

### Set3
```
Set-AdServerSettings -RunspaceServerSettings <RunspaceServerSettingsPresentationObject> [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

### Set1
```
Set-AdServerSettings [-ConfigurationDomainController <Fqdn>] [-Confirm] [-PreferredGlobalCatalog <Fqdn>]
 [-RecipientViewRoot <String>] [-SetPreferredDomainControllers <MultiValuedProperty>]
 [-ViewEntireForest <$true | $false>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Active Directory Domain Services server settings" entry in the Exchange and Shell Infrastructure Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Active Directory Domain Services server settings" entry in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-AdServerSettings -RecipientViewRoot "contoso.com/Marketing Users"
```

This example sets the recipient scope to the Marketing Users OU in the contoso.com domain for the current session.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-AdServerSettings -RecipientViewRoot "contoso.com/Marketing Users"
```

This example sets the recipient scope to the Marketing Users OU in the contoso.com domain for the current session.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-AdServerSettings -RecipientViewRoot "contoso.com/Marketing Users"
```

This example sets the recipient scope to the Marketing Users OU in the contoso.com domain for the current session.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-AdServerSettings -ViewEntireForest $true -PreferredGlobalCatalog gc1.contoso.com
```

This example sets the scope of the current session to the entire forest and designates gc1.contoso.com as the preferred global catalog server.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-AdServerSettings -ViewEntireForest $true -PreferredGlobalCatalog gc1.contoso.com
```

This example sets the scope of the current session to the entire forest and designates gc1.contoso.com as the preferred global catalog server.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-AdServerSettings -ViewEntireForest $true -PreferredGlobalCatalog gc1.contoso.com
```

This example sets the scope of the current session to the entire forest and designates gc1.contoso.com as the preferred global catalog server.

## PARAMETERS

### -PreferredServer
!!! Exchange Server 2010

The PreferredServer parameter specifies the fully qualified domain name (FQDN) of the domain controller to be used for this session.



!!! Exchange Server 2013, Exchange Server 2016

The PreferredServer parameter specifies the FQDN of the domain controller to be used for this session.



```yaml
Type: Fqdn
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RunspaceServerSettings
!!! Exchange Server 2010

The RunspaceServerSettings parameter enables you to pass an entire configuration object to the command to be processed. This parameter is useful in scripts where an entire object must be passed to the command.



!!! Exchange Server 2013, Exchange Server 2016

The RunspaceServerSettings parameter specifies whether to pass an entire configuration object to the command to be processed. This parameter is useful in scripts where an entire object must be passed to the command.



```yaml
Type: RunspaceServerSettingsPresentationObject
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ConfigurationDomainController
!!! Exchange Server 2010

The ConfigurationDomainController parameter specifies the FQDN of the configuration domain controller to be used for reading Exchange configuration information in this session.



!!! Exchange Server 2013, Exchange Server 2016

The ConfigurationDomainController parameter specifies the fully qualified domain name (FQDN) of the configuration domain controller to be used for reading Exchange configuration information in this session.



```yaml
Type: Fqdn
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredGlobalCatalog
The PreferredGlobalCatalog parameter specifies the FQDN of the global catalog server to be used for reading recipient information in this session.

```yaml
Type: Fqdn
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientViewRoot
The RecipientViewRoot parameter specifies the organizational unit (OU) to include in the recipient scope for this session. When you specify a recipient scope with this parameter, only the recipients included in the scope are returned. To specify an OU, use the syntax \<FQDN of domain\>/\<OU tree\>.

```yaml
Type: String
Parameter Sets: Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetPreferredDomainControllers
The SetPreferredDomainControllers parameter specifies the list of domain controllers used to read information from Active Directory in this session. You must specify the FQDN of the domain controllers. Separate multiple domain controllers using commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ViewEntireForest
The ViewEntireForest parameter specifies whether all the objects in the forest are viewed and managed in this session. Valid values are $true and $false.

When you specify a value of $true, the value stored in the RecipientViewRoot parameter is removed and all of the recipients in the forest can be viewed and managed.

```yaml
Type: $true | $false
Parameter Sets: Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/741b74a2-65ff-476f-aabf-1af42a3a2d6a.aspx)

