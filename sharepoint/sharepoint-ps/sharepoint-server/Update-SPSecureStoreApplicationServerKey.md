---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Update-SPSecureStoreApplicationServerKey
schema: 2.0.0
---

# Update-SPSecureStoreApplicationServerKey

## SYNOPSIS
Synchronizes the key on a Microsoft SharePoint server with the Secure Store master key.

## SYNTAX

```
Update-SPSecureStoreApplicationServerKey -Passphrase <String>
 -ServiceApplicationProxy <SPServiceApplicationProxyPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The `Update-SPSecureStoreApplicationServerKey` cmdlet synchronizes the key on a SharePoint server with the master key for the Secure Store service database.

Updating a server key is required when:

--A new SharePoint server that will run a Secure Store service instance is joined to the farm.
--The key stored in the server is not the key required for the current Secure Store service database (because of server or networking issues).
--The master key is updated but during propagation of the new key, this process fails on one or more of the servers.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>$newPassPhrase = "abcDEF123!"

Update-SPSecureStoreApplicationServerKey -ServiceApplicationProxy $contosoProxy -Passphrase $newPassPhrase
```

This example synchronizes the passphrase of the server key on a SharePoint server with the master key for the Secure Store service database.

## PARAMETERS

### -Passphrase
Specifies the passphrase that is used for the Secure Store service database.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceApplicationProxy
Specifies the proxy of the service application that contains the server key to synchronize.

```yaml
Type: SPServiceApplicationProxyPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
