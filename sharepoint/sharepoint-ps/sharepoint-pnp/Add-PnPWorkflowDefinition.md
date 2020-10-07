---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpworkflowdefinition
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Add-PnPWorkflowDefinition
---

# Add-PnPWorkflowDefinition

## SYNOPSIS
Adds a workflow definition

## SYNTAX 

```powershell
Add-PnPWorkflowDefinition -Definition <WorkflowDefinition>
                          [-DoNotPublish [<SwitchParameter>]]
                          [-Web <WebPipeBind>]
                          [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPWorkflowDefinition -Definition $wfdef
```

Adds an existing workflow definition, retrieved by Get-PnPWorkflowDefinition, to a site.

## PARAMETERS

### -Definition
The workflow definition to add.

```yaml
Type: WorkflowDefinition
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -DoNotPublish
Overrides the default behavior, which is to publish workflow definitions.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### System.Guid

Returns the Id of the workflow definition

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)