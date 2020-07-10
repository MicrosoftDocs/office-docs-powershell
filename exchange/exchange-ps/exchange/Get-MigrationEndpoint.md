---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-migrationendpoint
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-MigrationEndpoint
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Get-MigrationEndpoint

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MigrationEndpoint cmdlet to retrieve migration endpoint settings for source or destination servers for cutover or staged Exchange migrations, IMAP migrations, and remote moves.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### ConnectionSettingsFilter
```
Get-MigrationEndpoint -ConnectionSettings <ExchangeConnectionSettings> [-Diagnostic]
 [-DiagnosticArgument <String>] [-DomainController <Fqdn>] [<CommonParameters>]
```

### TypeFilter
```
Get-MigrationEndpoint -Type <MigrationType> [-Diagnostic] [-DiagnosticArgument <String>]
 [-DomainController <Fqdn>] [-Partition <MailboxIdParameter>] [-DiagnosticInfo <String>] [<CommonParameters>]
```

### Identity
```
Get-MigrationEndpoint [[-Identity] <MigrationEndpointIdParameter>] [-Diagnostic] [-DiagnosticArgument <String>]
 [-DomainController <Fqdn>] [-Partition <MailboxIdParameter>] [-DiagnosticInfo <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-MigrationEndpoint cmdlet retrieves settings for different types of migration:

- Cross-forest move: Move mailboxes between two different on-premises Exchange forests. Cross-forest moves require the use of a RemoteMove endpoint.

- Remote move: In a hybrid deployment, a remote move involves onboarding or offboarding migrations. Remote moves require the use of a RemoteMove endpoint. Onboarding moves mailboxes from an on-premises Exchange organization to Exchange Online, and uses a RemoteMove endpoint as the source endpoint of the migration batch. Offboarding moves mailboxes from Exchange Online to an on-premises Exchange organization and uses a RemoteMove endpoint as the target endpoint of the migration batch.

- Cutover Exchange migration: Migrate all mailboxes in an on-premises Exchange organization to Exchange Online. Cutover Exchange migration requires the use of an Exchange endpoint.

- Staged Exchange migration: Migrate a subset of mailboxes from an on-premises Exchange organization to Exchange Online. Staged Exchange migration requires the use of an Exchange endpoint.

- IMAP migration: Migrate mailbox data from an on-premises Exchange organization or other email system to Exchange Online. For an IMAP migration, you must first create the cloud-based mailboxes before you migrate mailbox data. IMAP migrations require the use of an IMAP endpoint.

- Local: Move mailboxes between different servers or databases within a single on-premises Exchange forest. Local moves don't require the use of an endpoint.

For more information about the different move and migration scenarios, see:

- [Mailbox moves in Exchange Server](https://docs.microsoft.com/Exchange/recipients/mailbox-moves)

- [Manage on-premises mailbox moves in Exchange Server](https://docs.microsoft.com/Exchange/architecture/mailbox-servers/manage-mailbox-moves)

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MigrationEndpoint -Identity OnboardingME01
```

This example retrieves the settings for the migration endpoint, OnboardingME01.

## PARAMETERS

### -ConnectionSettings
This parameter is available only in on-premises Exchange.

The ConnectionSettings parameter specifies the configuration settings of source or target servers for which you want to find a matching endpoint.

```yaml
Type: ExchangeConnectionSettings
Parameter Sets: ConnectionSettingsFilter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Diagnostic
This parameter is available only in on-premises Exchange.

The Diagnostic switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticArgument
This parameter is available only in on-premises Exchange.

The DiagnosticArgument parameter modifies the results that are returned by using the Diagnostic switch. Typically, you use the Diagnostic switch and the DiagnosticArgument parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticInfo
This parameter is available only in the cloud-based service.

Typically, you use the DiagnosticInfo parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

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
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the name of the migration endpoint you want to retrieve settings for.

```yaml
Type: MigrationEndpointIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Partition
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter filters the results by the type of migration. Valid values for this parameter are:

- ExchangeOutlookAnywhere: Cutover or staged Exchange migrations

- ExchangeRemoteMove: Remote moves and migrations

- IMAP: IMAP migrations

- PublicFolder: Public folder migrations

```yaml
Type: MigrationType
Parameter Sets: TypeFilter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
