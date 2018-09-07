---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Remove-MailboxRestoreRequest
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Remove-MailboxRestoreRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-MailboxRestoreRequest cmdlet to remove fully or partially completed restore requests.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Remove-MailboxRestoreRequest [-Identity] <MailboxRestoreRequestIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [-Force] [<CommonParameters>]
```

### Set2
```
Remove-MailboxRestoreRequest -RequestGuid <Guid> -RequestQueue <DatabaseIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The parameter set that requires the Identity parameter allows you to remove a fully or partially completed restore request.

The parameter set that requires the RequestGuid and RequestQueue parameters is used for Microsoft Exchange Mailbox Replication service (MRS) debugging purposes only.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-MailboxRestoreRequest -Identity "Ayla\MailboxRestore1"
```

This example removes the second restore request Ayla\MailboxRestore1.

### -------------------------- Example 2 --------------------------
```
Get-MailboxRestoreRequest -Status Completed | Remove-MailboxRestoreRequest
```

This example removes all restore requests that have the status of Completed.

### -------------------------- Example 3 --------------------------
```
Remove-MailboxRestoreRequest -RequestQueue MBXDB01 -RequestGuid 25e0eaf2-6cc2-4353-b83e-5cb7b72d441f
```

This example cancels the restore request by using the RequestGuid parameter for a request stored on MBXDB01. The parameter set that requires the RequestGuid and RequestQueue parameters is used for MRS debugging purposes only. You should only use this parameter set if instructed by Microsoft Customer Service and Support.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the restore request. The Identity parameter consists of the alias of the mailbox to be restored and the name that was specified when the restore request was created. The identity of the restore request uses the following syntax: Alias\Name.

If you didn't specify a name for the restore request when it was created, Exchange automatically generated a default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestoreX (where X = 1-9).

```yaml
Type: MailboxRestoreRequestIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RequestGuid
This parameter is available only in on-premises Exchange.

The RequestGuid parameter specifies the unique identifier for the restore request. To find the GUID, use the Get-MailboxRestoreRequest cmdlet. If you specify the RequestGuid parameter, you must also specify the RequestQueue parameter.

This parameter can't be used in conjunction with the Identity parameter.

```yaml
Type: Guid
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestQueue
This parameter is available only in on-premises Exchange.

The RequestQueue parameter specifies the target mailbox database on which the mailbox or archive of the request resides. You can use one of the following values:

- GUID of the database

- Database name

If you specify the RequestQueue parameter, you must also specify the RequestGuid parameter. This parameter can't be used in conjunction with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2016, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/a3d3327e-99b0-4d44-bd81-3e8f59eab41d.aspx)
