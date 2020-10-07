---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpworkflowsubscription
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Remove-PnPWorkflowSubscription
---

# Remove-PnPWorkflowSubscription

## SYNOPSIS
Removes a SharePoint 2010/2013 workflow subscription

## SYNTAX 

```powershell
Remove-PnPWorkflowSubscription -Identity <WorkflowSubscriptionPipeBind>
                               [-Web <WebPipeBind>]
                               [-Connection <PnPConnection>]
```

## DESCRIPTION
Removes a previously registered SharePoint 2010/2013 workflow subscription

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPWorkflowSubscription -Identity $wfSub
```

Removes the workflowsubscription, retrieved by Get-PnPWorkflowSubscription.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPWorkflowSubscription -Name MyWorkflow | Remove-PnPWorkflowSubscription
```

Get the workflowSubscription MyWorkFlow and remove it.

## PARAMETERS

### -Identity
The subscription to remove

```yaml
Type: WorkflowSubscriptionPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
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