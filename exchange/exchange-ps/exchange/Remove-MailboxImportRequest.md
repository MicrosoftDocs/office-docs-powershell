---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/remove-mailboximportrequest
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Remove-MailboxImportRequest
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Remove-MailboxImportRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-MailboxImportRequest cmdlet to remove fully or partially completed import requests. Completed import requests aren't automatically cleared. Requests need to be removed by using the Remove-MailboxImportRequest cmdlet. Multiple import requests can exist against the same mailbox if you provide a distinct import request name.

NOTE: This cmdlet is no longer supported in Exchange Online. To import a .pst file in Exchange Online, see [Use network upload to import PST files](https://docs.microsoft.com/microsoft-365/compliance/use-network-upload-to-import-pst-files).

This cmdlet is available only in the Mailbox Import Export role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://docs.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

Removing a partially completed import request removes the request from the Microsoft Exchange Mailbox Replication service (MRS) job queue. Any import progress that was made until the removal won't be reverted.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Remove-MailboxImportRequest [-Identity] <MailboxImportRequestIdParameter> [-Force]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

### MigrationRequestQueue
```
Remove-MailboxImportRequest -RequestGuid <Guid> -RequestQueue <DatabaseIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The parameter set that requires the Identity parameter allows you to remove a fully or partially completed import request.

The parameter set that requires the RequestGuid and RequestQueue parameters is used for MRS debugging purposes only.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-MailboxImportRequest -Identity "Ayla\MailboxImport1"
```

This example removes the second import request for Ayla's mailbox Ayla\\MailboxImport1.

### Example 2
```powershell
Remove-MailboxImportRequest -RequestQueue MBXDB01 -RequestGuid 25e0eaf2-6cc2-4353-b83e-5cb7b72d441f
```

This example cancels the import request by using the RequestGuid parameter for a mailbox or archive on MBXDB01.

### Example 3
```powershell
Get-MailboxImportRequest -Status Completed | Remove-MailboxImportRequest
```

This example removes all completed import requests.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the import request. By default, import requests are named \<alias\>\\MailboxImportX (where X = 0-9). If you created the request using the Name parameter, use the following syntax: \<alias\>\\\<name\>.

You can't use this parameter with the RequestGuid parameter.

```yaml
Type: MailboxImportRequestIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RequestGuid
This parameter is available only in on-premises Exchange.

The RequestGuid parameter (together with the RequestQueue parameter) specifies the unique identifier for the import request. To find the import request GUID, use the Get-MailboxImportRequest cmdlet.

You can't use this parameter with the Identity parameter.

```yaml
Type: Guid
Parameter Sets: MigrationRequestQueue
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestQueue
This parameter is available only in on-premises Exchange.

The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: MigrationRequestQueue
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
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
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 201

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
