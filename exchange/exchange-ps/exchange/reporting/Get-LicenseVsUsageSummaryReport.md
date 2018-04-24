---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online
title: Get-LicenseVsUsageSummaryReport
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Get-LicenseVsUsageSummaryReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

This cmdlet will be deprecated after January 29, 2018. For information about the available replacement Microsoft Graph reports in Office 365, see the subtopics of Working with Office 365 usage reports in Microsoft Graph (https://go.microsoft.com/fwlink/p/?LinkID=865135).

Use the Get-LicenseVsUsageSummaryReport cmdlet to retrieve a report that identifies the number of active users for installed software licenses (workloads).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
```

## DESCRIPTION
This cmdlet produces a report that is intended to enable clients to track and manage the use of contracted software licenses. The output contains the following properties.

- Date: The period being measured.

- TenantGuid: The unique identifier for the Exchange Online tenant.

- Workload: The workload whose users are being counted. The current workloads include: Exchange Online, SharePoint Online, Skype for Business Online, and Microsoft Yammer.

- NonTrialEntitlements: The number of entitled users for the workload.

- TrialEntitlements: The number of provisionally entitled (trial) users for the workload.

- ActiveUsers: The count of active users for the workload.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-LicenseVsUsageSummaryReport
```

This example gets a report of the active workload users.

## PARAMETERS

## INPUTS

### 
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### 
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/500b5bf7-d1f3-42d6-85de-232f701421f9.aspx)
