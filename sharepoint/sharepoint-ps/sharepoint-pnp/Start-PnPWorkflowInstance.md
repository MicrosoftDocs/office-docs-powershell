---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/start-pnpworkflowinstance
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Start-PnPWorkflowInstance
---

# Start-PnPWorkflowInstance

## SYNOPSIS
Starts a SharePoint 2010/2013 workflow instance on a list item

## SYNTAX 

```powershell
Start-PnPWorkflowInstance -Subscription <WorkflowSubscriptionPipeBind>
                          -ListItem <ListItemPipeBind>
                          [-Web <WebPipeBind>]
                          [-Connection <PnPConnection>]
```

## DESCRIPTION
Allows starting a SharePoint 2010/2013 workflow on a list item in a list

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Start-PnPWorkflowInstance -Subscription 'WorkflowName' -ListItem $item
```

Starts a workflow instance on the specified list item

### ------------------EXAMPLE 2------------------
```powershell
Start-PnPWorkflowInstance -Subscription $subscription -ListItem 2
```

Starts a workflow instance on the specified list item

## PARAMETERS

### -ListItem
The list item to start the workflow against

```yaml
Type: ListItemPipeBind
Parameter Sets: (All)

Required: True
Position: 1
Accept pipeline input: False
```

### -Subscription
The workflow subscription to start

```yaml
Type: WorkflowSubscriptionPipeBind
Parameter Sets: (All)

Required: True
Position: 0
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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)