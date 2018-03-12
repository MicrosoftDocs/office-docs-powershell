---
title: "Reporting cmdlets in Exchange Online"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 12/14/2017
ms.audience: Admin
ms.topic: article
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 9f883787-d711-41a5-95b3-f7aaa1b3cdf0
description: ""
---

# Reporting cmdlets in Exchange Online

> [!NOTE]
> Many of the reporting cmdlets in this topic will be deprecated after January 29. 2018. Most of the associated reports have been replaced by reports in Microsoft Graph. For information about the Microsoft Graph reports, see the subtopics of [Working with Office 365 usage reports in Microsoft Graph](https://go.microsoft.com/fwlink/p/?linkid=865135). 
  
## Advanced Threat Protection (ATP) reporting cmdlets

[Get-AdvancedThreatProtectionTrafficReport](../../exchange-online-cmdlets/antispam-and-antimalware-cmdlets-in-exchange-online/get-advancedthreatprotectiontrafficreport.md)
  
[Get-SpoofMailReport](../../exchange-online-cmdlets/antispam-and-antimalware-cmdlets-in-exchange-online/get-spoofmailreport.md)
  
[Get-UrlTrace](../../exchange-online-cmdlets/antispam-and-antimalware-cmdlets-in-exchange-online/get-urltrace.md)
  
## Exchange Online reporting cmdlets

[Get-DlpDetailReport](get-dlpdetailreport.md)
  
[Get-DlpDetectionsReport](get-dlpdetectionsreport.md)
  
[Export-MailboxDiagnosticLogs](export-mailboxdiagnosticlogs.md)
  
[Get-MailDetailDlpPolicyReport](get-maildetaildlppolicyreport.md)
  
[Get-MailDetailMalwareReport](get-maildetailmalwarereport.md)
  
[Get-MailDetailSpamReport](get-maildetailspamreport.md)
  
[Get-MailDetailTransportRuleReport](get-maildetailtransportrulereport.md)
  
[Get-MailFilterListReport](get-mailfilterlistreport.md)
  
[Get-MailTrafficPolicyReport](get-mailtrafficpolicyreport.md)
  
[Get-MailTrafficReport](get-mailtrafficreport.md)
  
[Get-MailTrafficSummaryReport](get-mailtrafficsummaryreport.md)
  
[Get-MailTrafficTopReport](get-mailtraffictopreport.md)
  
[Get-MxRecordReport](get-mxrecordreport.md)
  
[Get-OutboundConnectorReport](get-outboundconnectorreport.md)
  
[Get-RecipientStatisticsReport](get-recipientstatisticsreport.md)
  
[Get-ServiceDeliveryReport](get-servicedeliveryreport.md)
  
For the Microsoft Graph replacements of the following deprecated Exchange Online reporting cmdlets, see these topics:
  
- [Email app usage reports](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/email_app_usage_reports)
    
- [Office 365 Groups activity reports](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/office_365_groups_activity_reports)
    
- [Mailbox usage reports](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/mailbox_usage_reports)
    
Get-ConnectionByClientTypeDetailReport
  
Get-ConnectionByClientTypeReport
  
Get-GroupActivityReport
  
Get-MailboxActivityReport
  
Get-MailboxUsageDetailReport
  
Get-MailboxUsageReport
  
Get-StaleMailboxDetailReport
  
Get-StaleMailboxReport
  
## Message trace cmdlets

[Get-MessageTrace](get-messagetrace.md)
  
[Get-MessageTraceDetail](get-messagetracedetail.md)
  
[Get-HistoricalSearch](get-historicalsearch.md)
  
[Start-HistoricalSearch](start-historicalsearch.md)
  
[Stop-HistoricalSearch](stop-historicalsearch.md)
  
## Office 365 reporting cmdlets

For the Microsoft Graph replacement of the **Get-LicenseVsUsageSummaryReport** cmdlet, see[Office 365 active users reports](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/office_365_active_users_reports).
  
Currently, the following deprecated Office 365 reporting cmdlets don't have Microsoft Graph replacements:
  
Get-O365ClientBrowserDetailReport
  
Get-O365ClientBrowserReport
  
Get-O365ClientOSReport
  
Get-O365ClientOSDetailReport
  
## Skype for Business Online reporting cmdlets

For the Microsoft Graph replacements of the Skype for Business Online reporting cmdlets, see these topics:
  
- [Skype for Business activity reports](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/skype_for_business_activity_reports)
    
- [Skype for Business device usage reports](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/skype_for_business_device_usage_reports)
    
- [Skype for Business organizer activity reports](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/skype_for_business_organizer_activity_reports)
    
- [Skype for Business participant activity reports](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/skype_for_business_participant_activity_reports)
    
- [Skype for Business peer-to-peer activity reports](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/skype_for_business_peer_to_peer_activity)
    
Get-CsActiveUserReport
  
Get-CsAVConferenceTimeReport
  
Get-CsClientDeviceDetailReport
  
Get-CsClientDeviceReport
  
Get-CsConferenceReport
  
Get-CsP2PAVTimeReport
  
Get-CsP2PSessionReport
  
Get-CsPSTNConferenceTimeReport
  
Get-CsPSTNUsageDetailReport
  
Get-CsUserActivitiesReport
  
Get-CsUsersBlockedReport
  
For detailed information about the available Skype for Business Online reports in Office 365, see [Skype for Business Online reporting](https://go.microsoft.com/fwlink/p/?linkid=512042).
  
## SharePoint Online reporting cmdlets

For the Microsoft Graph replacements of the following deprecated SharePoint Online reporting cmdlets, see these topics:
  
- [OneDrive activity reports](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/onedrive_activity_reports)
    
- [OneDrive usage reports](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/onedrive_usage_reports)
    
- [SharePoint activity reports](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/sharepoint_activity_reports)
    
- [SharePoint site usage reports](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/sharepoint_site_usage_reports)
    
Get-SPOActiveUserReport
  
Get-SPOSkyDriveProDeployedReport
  
Get-SPOSkyDriveProStorageReport
  
Get-SPOTeamSiteDeployedReport
  
Get-SPOTeamSiteStorageReport
  
Get-SPOTenantStorageMetricReport
  

