---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Online
title: New-DataEncryptionPolicy
schema: 2.0.0
---

# New-DataEncryptionPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-DataEncryptionPolicy cmdlet to create data encryption policies in Exchange Online.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-DataEncryptionPolicy [-Name] <String> -AzureKeyIDs <MultiValuedProperty> [-Confirm] [-Description <String>]
 [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Data encryption policy cmdlets are the Exchange Online part of service encryption with Customer Key in Office 365. For more information, see Controlling your data in Office 365 using Customer Key (https://aka.ms/customerkey).

You can assign a data encryption policy to a mailbox by using the DataEncryptionPolicy parameter on the Set-Mailbox cmdlet in Exchange Online PowerShell.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-DataEncryptionPolicy -Name "US Mailboxes" -AzureKeyIDs "https://contosoWestUSvault01.vault.azure.net/keys/USA_Key_01","https://contosoEastUSvault01.vault.azure.net/keys/USA_Key_02" -Description "Root key for mailboxes located in US territories"
```

This example creates a data encryption policy named US Mailboxes with the specified Azure Key Vault keys and description.

## PARAMETERS

### -AzureKeyIDs
The AzureKeyIDs parameter specifies the URI values of the Azure Key Vault keys to associate with the data encryption policy. You need to specify at least two Azure Key Vault keys separated by commas. For example, "https://contosoWestUSvault01.vault.azure.net/keys/USA\_Key\_01","https://contosoEastUSvault01.vault.azure.net/keys/USA\_Key\_02"

To find the URI value for an Azure Key Vault, replace \<ValutName\> with the name of the vault, and run this command in Azure Rights Management PowerShell: Get-AzureKeyVaultKey -VaultName \<VaultName\>).id. For more information, see Get started with Azure Key Vault (https://go.microsoft.com/fwlink/p/?linkid=521402).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the unique name for the data encryption policy. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
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
Aliases: cf
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies an optional description for the data encryption policy. If the value contains spaces, enclose the value in quotation marks.

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

### -Enabled
The Enabled parameter enables or disable the data encryption policy. Valid values are:

- $true: The policy is enabled. This is the default value.

- $false: The policy is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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

[Online Version](https://technet.microsoft.com/library/b6965214-8df9-4024-98bf-0ae92c676950.aspx)

