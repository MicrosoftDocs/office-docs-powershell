---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: New-SPAccessServicesDatabaseServer
schema: 2.0.0
---

# New-SPAccessServicesDatabaseServer

## SYNOPSIS
Adds a server to host Access Services databases.

## SYNTAX

```
New-SPAccessServicesDatabaseServer [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-AvailableForCreate <Boolean>] [-Confirm]
 [-DatabaseServerCredentials <PSCredential>] [-DatabaseServerGroupName <String>] -DatabaseServerName <String>
 [-Encrypt <Boolean>] [-Exclusive <Boolean>] [-SecondaryDatabaseServerName <String>]
 [-ServerReferenceId <Guid>] [-TrustServerCertificate <Boolean>] [-UserDomain <String>]
 [-ValidateServer <Boolean>] [-WhatIf] [-LoginType <LoginType>] [-State <DatabaseServerStates>]
 [-StateOwner <ServerStateOwner>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet adds additional Access Services database servers to host Access Services databases.

## EXAMPLES

### Example 1 
```
PS C:\>New-SPAccessServicesDatabaseServer -ServiceContext http://siteUrl -DatabaseServerName SQLSVR01 -ValidateServer:$true
```

This example adds the SQL Server named SQLSVR01 as an Access Services database server using the context of the site, http://siteUrl. This also validates SQLSVR01 is capable of hosting Access Services databases.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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
Indicates whether or not the SQL Server is available to create Access Services databases on. The default value is true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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

### -DatabaseServerCredentials
Specifies the credentials used to connect to the SQL Server.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServerGroupName
Specifies the Access Services database group name. The default value is DEFAULT.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServerName
Specifies the name of the SQL Server to add.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Encrypt
Specifies to use SSL encryption between Access Services and the SQL Server hosting Access Services databases.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Exclusive
If the SQL Server has AvaliableForCreate set to False, this will update it to True. If the SQL Server Id does not match the database server Id and the server has AvailableForCreate set to True, this will set AvailableForCreate to False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryDatabaseServerName
Specifies a secondary SQL Server to associate to the new SQL Server. This is used for disaster recovery purposes.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServerReferenceId
Provide a specific Server Reference Id. By default, a Server Reference Id is generated automatically when the SQL Server is added.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceContext
Specifies the service context to retrieve Access Services information from.

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
Sets a value that indicates whether the channel will be encrypted while bypassing walking the certificate chain to validate trust.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserDomain
Specifies the domain to use for credentials.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValidateServer
Validates the SQL Server is in a supported state to host Access Services databases.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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

### -LoginType
Indicates the login type. Valid values are:

* ApplicationLogin 

*LocalDBApplicationLogin 

* ServerLogin 

* StorageAccountLogon

* WindowsAzureServerLogin

The default value is ServerLogin.

```yaml
Type: LoginType
Parameter Sets: (All)
Aliases: 
Accepted values: ApplicationLogin, LocalDBApplicationLogin, ServerLogin, StorageAccountLogon, WindowsAzureServerLogin
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -State
Indicates the availability of the SQL Server to be added. Valid values are:

* Active

* Locked

* Reserved

The default value is Active.

```yaml
Type: DatabaseServerStates
Parameter Sets: (All)
Aliases: 
Accepted values: Active, Locked, Reserved
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StateOwner
Specifies the state owner. Valid values are:

* NoOwner

* TenantMove

The default value is NoOwner.

```yaml
Type: ServerStateOwner
Parameter Sets: (All)
Aliases: 
Accepted values: NoOwner, TenantMove
Applicable: SharePoint Server 2016

Required: False
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

