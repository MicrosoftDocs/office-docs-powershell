---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPAccessServicesDatabaseServer
schema: 2.0.0
---

# Set-SPAccessServicesDatabaseServer

## SYNOPSIS
{{Fill in the Synopsis}}


## SYNTAX

### SetAvailableForCreateParameterSet
```
Set-SPAccessServicesDatabaseServer [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] -AvailableForCreate <Boolean> [-Confirm]
 -DatabaseServer <AccessServicesDatabaseServerPipeBind>
 -DatabaseServerGroup <AccessServicesDatabaseServerGroupPipeBind> [-Exclusive <Boolean>] [-WhatIf]
 [<CommonParameters>]
```

### SetCredentialsParameterSet
```
Set-SPAccessServicesDatabaseServer [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 -DatabaseServer <AccessServicesDatabaseServerPipeBind> [-DatabaseServerCredentials <PSCredential>]
 -DatabaseServerGroup <AccessServicesDatabaseServerGroupPipeBind> [-DatabaseServerName <String>] [-WhatIf]
 [<CommonParameters>]
```

### SetEncryptParameterSet
```
Set-SPAccessServicesDatabaseServer [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 -DatabaseServer <AccessServicesDatabaseServerPipeBind>
 -DatabaseServerGroup <AccessServicesDatabaseServerGroupPipeBind> -Encrypt <Boolean>
 -TrustServerCertificate <Boolean> [-WhatIf] [<CommonParameters>]
```

### SetFailoverParameterSet
```
Set-SPAccessServicesDatabaseServer [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 -DatabaseServer <AccessServicesDatabaseServerPipeBind>
 -DatabaseServerGroup <AccessServicesDatabaseServerGroupPipeBind> -Failover <Boolean> [-WhatIf]
 [<CommonParameters>]
```

### SetSecondaryDatabaseServerNameParameterSet
```
Set-SPAccessServicesDatabaseServer [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 -DatabaseServer <AccessServicesDatabaseServerPipeBind>
 -DatabaseServerGroup <AccessServicesDatabaseServerGroupPipeBind> [-SecondaryDatabaseServerName <String>]
 [-WhatIf] [<CommonParameters>]
```

### SetUserDomainParameterSet
```
Set-SPAccessServicesDatabaseServer [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 -DatabaseServer <AccessServicesDatabaseServerPipeBind>
 -DatabaseServerGroup <AccessServicesDatabaseServerGroupPipeBind> -UserDomain <String> [-WhatIf]
 [<CommonParameters>]
```

### SetServerStateParameterSet
```
Set-SPAccessServicesDatabaseServer [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 -DatabaseServer <AccessServicesDatabaseServerPipeBind>
 -DatabaseServerGroup <AccessServicesDatabaseServerGroupPipeBind> -State <DatabaseServerStates>
 -StateOwner <ServerStateOwner> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}


## EXAMPLES

### --------------------EXAMPLE---------------------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}


## PARAMETERS

### -AssignmentCollection
{{Fill AssignmentCollection Description}}

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AvailableForCreate
{{Fill AvailableForCreate Description}}

```yaml
Type: Boolean
Parameter Sets: SetAvailableForCreateParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServer
{{Fill DatabaseServer Description}}

```yaml
Type: AccessServicesDatabaseServerPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServerCredentials
{{Fill DatabaseServerCredentials Description}}

```yaml
Type: PSCredential
Parameter Sets: SetCredentialsParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServerGroup
{{Fill DatabaseServerGroup Description}}

```yaml
Type: AccessServicesDatabaseServerGroupPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServerName
{{Fill DatabaseServerName Description}}

```yaml
Type: String
Parameter Sets: SetCredentialsParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Encrypt
{{Fill Encrypt Description}}

```yaml
Type: Boolean
Parameter Sets: SetEncryptParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Exclusive
{{Fill Exclusive Description}}

```yaml
Type: Boolean
Parameter Sets: SetAvailableForCreateParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Failover
{{Fill Failover Description}}

```yaml
Type: Boolean
Parameter Sets: SetFailoverParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryDatabaseServerName
{{Fill SecondaryDatabaseServerName Description}}

```yaml
Type: String
Parameter Sets: SetSecondaryDatabaseServerNameParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceContext
{{Fill ServiceContext Description}}

```yaml
Type: SPServiceContextPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TrustServerCertificate
{{Fill TrustServerCertificate Description}}

```yaml
Type: Boolean
Parameter Sets: SetEncryptParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserDomain
{{Fill UserDomain Description}}

```yaml
Type: String
Parameter Sets: SetUserDomainParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -State
{{Fill State Description}}

```yaml
Type: DatabaseServerStates
Parameter Sets: SetServerStateParameterSet
Aliases: 
Accepted values: Active, Locked, Reserved
Applicable: SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StateOwner
{{Fill StateOwner Description}}

```yaml
Type: ServerStateOwner
Parameter Sets: SetServerStateParameterSet
Aliases: 
Accepted values: NoOwner, TenantMove
Applicable: SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPServiceContextPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
