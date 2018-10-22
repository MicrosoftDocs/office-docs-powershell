---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Stop-SPTaxonomyReplication
schema: 2.0.0
---

# Stop-SPTaxonomyReplication

## SYNOPSIS
Terminates Hybrid SharePoint Taxonomy replication from SharePoint Online site to local SharePoint on-premises site.

## SYNTAX

```
Stop-SPTaxonomyReplication [-AssignmentCollection <SPAssignmentCollection>] -Credential <PSCredential>
 [<CommonParameters>]
```

## DESCRIPTION
Use the Stop-SPTaxonomyReplication cmdlet to terminate Hybrid SharePoint Taxonomy replication from SharePoint Online site to local SharePoint on-premises site. The Taxonomy Groups Replication timer job will be killed and a full replication from SharePoint Online Taxonomy store to local SharePoint on-premises store will be performed.

## EXAMPLES

### ------------------EXAMPLE-----------------------
```
PS C:\>Stop-SPTaxonomyReplication -Credential (Get-Credential)
```

This example performs a full replication and deletes the Taxonomy Groups Replication timer job. If the full replication fails, you can run the cmdlet again.  The credential is a SharePoint Online tenant administrator credential.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Credential
This is the Taxonomy Term Store administrator credential of remote SharePoint Online Term Store.

Fetches full taxonomy data properties, so a Term Store Administrator's credential is needed to perform the operations.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSCredential
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
