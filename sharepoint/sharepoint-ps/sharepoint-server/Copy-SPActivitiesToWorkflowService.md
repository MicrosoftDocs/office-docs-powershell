---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Copy-SPActivitiesToWorkflowService
schema: 2.0.0
---

# Copy-SPActivitiesToWorkflowService

## SYNOPSIS
Copies SharePoint 2013 workflow activities from SharePoint to Workflow Manager.

## SYNTAX

```
Copy-SPActivitiesToWorkflowService [-ActivityName <String>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Credential <ICredentials>] [-Force <Boolean>] [-WhatIf] [-WorkflowServiceAddress <String>]
 [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1 
```
PS C:\>$credential = [System.Net.CredentialCache]::DefaultNetworkCredentials
PS C:\>$site = Get-SPSite(https://siteCollection)
PS C:\>$proxy = Get-SPWorkflowServiceApplicationProxy
PS C:\>$svcAddress = $proxy.GetWorkflowServiceAddress($site)
PS C:\>Copy-SPActivitiesToWorkflowService -WorkflowServiceAddress $svcAddress -Credential $credential -Force $true
```

Copies Worklow Activities from the specified Site Collection to Workflow Manager.

## PARAMETERS

### -ActivityName
{{Fill ActivityName Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable:  SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
{{Fill AssignmentCollection Description}}

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable:  SharePoint Server 2013, SharePoint Server 2016

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
Applicable:  SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
{{Fill Credential Description}}

```yaml
Type: ICredentials
Parameter Sets: (All)
Aliases: 
Applicable:  SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
{{Fill Force Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable:  SharePoint Server 2013, SharePoint Server 2016

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
Applicable:  SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkflowServiceAddress
The URL of the registered Workflow Manager service.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable:  SharePoint Server 2013, SharePoint Server 2016

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

