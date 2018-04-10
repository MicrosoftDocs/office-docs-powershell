---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Copy-SPActivitiesToWorkflowService
schema: 2.0.0
---

# Copy-SPActivitiesToWorkflowService

## SYNOPSIS
This cmdlet copies the Workflow Activities from SharePoint Server to the Workflow Manager farm. Activities are defined within Microsoft provided or custom coded assemblies.



## SYNTAX

```
Copy-SPActivitiesToWorkflowService [-ActivityName <String>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Credential <ICredentials>] [-Force <Boolean>] [-WhatIf] [-WorkflowServiceAddress <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Copies Workflow activites from SharePoint Server to Workflow Manager.

## EXAMPLES

### Example 1 
```
PS C:\>$credential = [System.Net.CredentialCache]::DefaultNetworkCredentials
PS C:\>$site = Get-SPSite <siteurl>
```


Copies the Workflow activities from SharePoint to the Workflow Manager farm using the specified Site Collection URL as a reference.


## PARAMETERS

### -ActivityName
Copies a specific ActivityName. If not specified, all Activities are copied.

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

### -Credential
The credential used to connect to Workflow Manager.

```yaml
Type: ICredentials
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Forces a specific Activity to be copied to Workflow Manager.

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

### -WorkflowServiceAddress
The Workflow Manager farm endpoint URL.


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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

