---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Connect-SPConfigurationDatabase

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Connects the local server computer to a farm.



## SYNTAX

```
Connect-SPConfigurationDatabase [-DatabaseName] <String> [-SkipRegisterAsDistributedCacheHost]
 [-Passphrase] <SecureString> -DatabaseServer <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-DatabaseCredentials <PSCredential>] [-DatabaseFailOverPartner <String>] [-LocalServerRole <SPServerRole>]
 [<CommonParameters>]
```

## DESCRIPTION
The Connect-SPConfigurationDatabase cmdlet connects the current server to the specified configuration database.

Essentially, this cmdlet connects the server to the farm.
If the current computer cannot be connected to a farm, the following error message is displayed:

"This machine is already connected to a SharePoint farm.
See: Dismount-SPConfigurationDatabase"

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
C:\PS>Connect-SPConfigurationDatabase -DatabaseServer "ServerName\InstanceName" -DatabaseName "SharePointConfigurationDatabaseName" -Passphrase (ConvertTo-SecureString "MyP@ssw0rd") -AsPlainText -Force                      

C:\PS>Start-Service SPTimerv4
```

This example joins the local server computer to a farm that is configured to use the database SharePointConfigurationDatabase on an instance of SQL Server by using the name ServerName\InstanceName with the passphrase MyP@ssw0rd.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Connect-SPConfigurationDatabase -DatabaseServer "ServerName\InstanceName" -DatabaseName "SharePointConfigurationDatabaseName" -Passphrase (ConvertTo-SecureString "MyP@ssw0rd" -AsPlainText -Force 
                     

C:\PS>Start-Service SPTimerv4
```

This example joins the local server computer to a farm that is configured to use the database SharePointConfigurationDatabase on an instance of SQL Server by using the name ServerName\InstanceName with the passphrase MyP@ssw0rd.

## PARAMETERS

### -DatabaseName
Specifies the name of the configuration database to which to connect the server.

The type must be a valid database name; for example, DB1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DatabaseServer
Specifies the server on which to create the configuration database.
The default value is the local computer name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Passphrase
Specifies the secure password phrase for connecting the current server to the configuration database.

The type must be a valid secure string; for example, MyBDCApp1serverkey.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 9
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -SkipRegisterAsDistributedCacheHost
By default all the servers in the farm are registered as a cache host (that is, DistributedCacheService is running by default).

Use this parameter to not register the server computer as a distributed cache host.
If you want to have a dedicated cache host, then use this parameter to make sure that caching service is not installed on the computer.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 10
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

### -DatabaseCredentials
Specifies the PSCredential object that contains the user name and password to be used for database SQL authentication.
If this parameter is not specified, the current user is used.

The type must be a valid PSCredential object.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -DatabaseFailOverPartner
{{Fill DatabaseFailOverPartner Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalServerRole
{{Fill LocalServerRole Description}}

```yaml
Type: SPServerRole
Parameter Sets: (All)
Aliases: 
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

## OUTPUTS

## NOTES

## RELATED LINKS

